import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../../../lib/supabase-server";
import Link from "next/link";

async function logoutAction() {
  "use server";
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="min-h-screen bg-cream-50">
      <header className="bg-white border-b border-charcoal-200 px-6 py-4 flex items-center justify-between sticky z-50 top-0">
        <div className="flex items-center gap-6">
          <span className="md:font-bold md:text-charcoal-800 md:block hidden">Admin Panel</span>
          <nav className="flex gap-4">
            <Link
              href="/admin/projects"
              className="text-sm text-charcoal-600 hover:text-brown-600 transition-colors"
            >
              Management Projects
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-charcoal-500 md:block hidden">{user?.email}</span>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-sm bg-charcoal-100 hover:bg-charcoal-200 text-charcoal-700 px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </form>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
