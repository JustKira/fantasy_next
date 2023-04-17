import AdminRoutes from "@/utils/AdminRoutes";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminRoutes>{children}</AdminRoutes>;
}
