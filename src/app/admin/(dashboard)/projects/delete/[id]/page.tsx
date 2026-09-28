import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../../../../../../lib/supabase-server";
import Image from "next/image";

async function hapusprojectAction(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Failed delete data:", error.message);
  }

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export default async function HapusprojectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();
  const { data: project } = await supabase
    .from("projects")
    .select("title, id, image")
    .eq("id", id)
    .single();
  if (!project) redirect("/admin/projects");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-charcoal-800 mb-6 mt-10">
        Confirm deletion
      </h1>
      <div className="bg-white rounded-2xl border border-red-200 p-6 w-fit">
        <p className="text-charcoal-700 mb-4">
          Are you sure you want to delete this project?
        </p>
        <p className="font-semibold text-charcoal-900 mb-2">{project.title}</p>
        <div className="relative aspect-16/7 overflow-hidden bg-cream-200 mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <p className="text-sm text-red-600 mb-6">
          This action cannot be undone.
        </p>
        <form action={hapusprojectAction} className="flex gap-3">
          <input type="hidden" name="id" value={project.id} />
          <button
            type="submit"
            className="bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Yes, delete
          </button>
          <a
            href="/admin/projects"
            className="bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200 px-5 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Cancel
          </a>
        </form>
      </div>
    </div>
  );
}
