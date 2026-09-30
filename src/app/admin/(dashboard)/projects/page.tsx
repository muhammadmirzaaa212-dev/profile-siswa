import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "../../../../../lib/supabase-server";
import Link from "next/link";

export default async function AdminProjectsPage() {

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: daftarProyek } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: false });

  return (
    <div className="space-y-8">
      <h1 className="text-xl font-semibold text-charcoal-900">Welcome, {user?.email}</h1>
      <div className="flex flex-col md:flex-row md:items-center justify-start md:justify-between gap-4">
        <div className="flex flex-row items-center gap-6">
          <h1 className="text-2xl font-bold text-charcoal-800">
            Management Projects
          </h1>
          <p className="text-sm text-charcoal-500">
            Total: {daftarProyek?.length} projects
          </p>
        </div>
        <Link
          href="/admin/projects/add"
          className="w-fit flex items-center justify-center rounded-lg bg-brown-600 px-3 py-1.5 text-white transition-all hover:bg-brown-700 sm:px-4 sm:py-2"
        >
          + Add Project
        </Link>
      </div>
      <div className="bg-white rounded-2xl border border-charcoal-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-charcoal-50 border-b border-charcoal-200">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-charcoal-700 tracking-wider uppercase">
                Title
              </th>
              <th className="text-left px-4 py-3 font-medium text-charcoal-700 tracking-wider uppercase">
                Tools
              </th>
              <th className="text-left px-4 py-3 font-medium text-charcoal-700 tracking-wider uppercase">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal-100">
            {daftarProyek?.map((proyek) => (
              <tr key={proyek.id} className="hover:bg-charcoal-50">
                <td className="px-4 py-3 text-charcoal-800 font-medium">
                  {proyek.title}
                </td>
                <td className="px-4 py-3 text-charcoal-500">{proyek.tools.join(", ")}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-4">
                    <Link
                      href={"/admin/projects/edit/" + proyek.id}
                      className="text-xs bg-brown-50 text-brown-700 hover:bg-brown-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Edit
                    </Link>
                    <Link
                      href={"/admin/projects/delete/" + proyek.id}
                      className="text-xs bg-red-50 text-red-700 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      Delete
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
