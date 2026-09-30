import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DOOR_COOKIE_NAME = "door_pass";

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // ---- KHUSUS halaman /admin/login: cek doorpass dulu ----
  if (pathname === "/admin/login") {
    const keyParam = searchParams.get("key");
    const hasValidCookie =
      request.cookies.get(DOOR_COOKIE_NAME)?.value ===
      process.env.ADMIN_DOOR_KEY;

    // kalau bawa ?key=... dan cocok → kasih cookie, redirect ke URL bersih
    if (keyParam && keyParam === process.env.ADMIN_DOOR_KEY) {
      const response = NextResponse.redirect(
        new URL("/admin/login", request.url),
      );
      response.cookies.set(DOOR_COOKIE_NAME, process.env.ADMIN_DOOR_KEY!, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 1, 
        path: "/",
      });
      return response;
    }

    // kalau BELUM punya cookie valid dan BELUM bawa key yang benar → tampilkan 404
    if (!hasValidCookie) {
      return NextResponse.rewrite(
        new URL("/admin/door-not-found", request.url),
      );
    }
    // kalau cookie valid → lanjut biarkan halaman login tampil normal
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });

          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  if (isAdminRoute && !isLoginPage && !user) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  if (isLoginPage && user) {
    return NextResponse.redirect(new URL("/admin/projects", request.url));
  }
  return supabaseResponse;
}

export const config = {
  matcher: ["/admin/:path*"],
};
