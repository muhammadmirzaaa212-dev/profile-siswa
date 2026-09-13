import "@/app/globals.css"
import Topbar from "@/components/Topbar";

export default function SiteLayout({
  children,
  }: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-full flex flex-col`}>
      <Topbar/>
      {children}
    </div>
  );
}
