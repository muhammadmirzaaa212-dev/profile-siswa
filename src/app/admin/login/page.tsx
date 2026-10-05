import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../../../lib/supabase-server";

async function loginAction(formData: FormData) {
  "use server";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    redirect("/admin/login?error=Kredensial+tidak+valid");
  }
  redirect("/admin/projects");
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-charcoal-800 mb-2">
          Admin Login
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          Login to manage portfolio data
        </p>
        {params.error && (
          <p className="text-red-600 text-sm mb-4 bg-red-50 p-3 rounded-lg">
            {params.error}
          </p>
        )}
        <form action={loginAction} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-charcoal-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-charcoal-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brown-500 text-charcoal-600 placeholder-charcoal-300"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-charcoal-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full border border-charcoal-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brown-500 text-charcoal-600 placeholder-charcoal-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brown-600 text-white py-2 rounded-lg font-medium hover:bg-brown-700 transition-colors cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
