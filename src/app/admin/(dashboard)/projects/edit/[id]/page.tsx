import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../../../../../../lib/supabase-server";

async function editprojectAction(formData: FormData) {
  "use server";

  const toolsRaw = formData.get("tools") as string;
  const toolsArray = toolsRaw
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t.length > 0);

  const id = formData.get("id") as string;
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("projects")
    .update({
      slug: formData.get("slug") as string,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      tools: toolsArray
    })
    .eq("id", id);

  if (error) {
    console.error("Failed Edit data:", error.message);
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export default async function EditprojectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createSupabaseServerClient();
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();
  if (!project) redirect("/admin/projects");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-charcoal-800 mb-6">
        Edit Project
      </h1>
      <div className="bg-white rounded-2xl border border-charcoal-200 p-6 w-full max-w-2xl">
        <form action={editprojectAction} className="space-y-4">
          <input type="hidden" name="id" value={project.id} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="edit-title"
                className="block text-sm font-medium text-charcoal-700 mb-1"
              >
                Project Title
              </label>
              <input
                id="edit-title"
                name="title"
                defaultValue={project.title}
                required
                className="w-full border border-charcoal-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brown-500 text-charcoal-600"
              />
            </div>
            <div>
              <label
                htmlFor="edit-tools"
                className="block text-sm font-medium text-charcoal-700 mb-1"
              >
                Tools (separate with commas)
              </label>
              <input
                id="edit-tools"
                name="tools"
                defaultValue={project.tools}
                className="w-full border border-charcoal-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brown-500 text-charcoal-600"
              />
            </div>
            <div>
              <label
                htmlFor="slug"
                className="block text-sm font-medium text-charcoal-700 mb-1"
              >
                Slug
              </label>
              <input
                id="slug"
                name="slug"
                defaultValue={project.slug}
                required
                className="w-full border border-charcoal-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brown-500 text-charcoal-600 placeholder-charcoal-300"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-charcoal-700 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                defaultValue={project.category}
                className="w-full border border-charcoal-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brown-500 text-charcoal-600"
              >
                <option value="Web">Web</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="IoT">IoT</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="edit-description"
              className="block text-sm font-medium text-charcoal-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="edit-description"
              name="description"
              defaultValue={project.description}
              rows={3}
              className="w-full border border-charcoal-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brown-500 text-charcoal-600"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-brown-600 text-white px-5 py-2 rounded-lg text-sm fontmedium hover:bg-brown-700 transition-colors"
            >
              Save changes
            </button>
            <a
              href="/admin/projects"
              className="bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200 px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
