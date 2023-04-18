import AdminRoutes from "@/utils/AdminRoutes";
import ProtectedRoutes from "@/utils/ProtectedRoutes";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoutes>
      <AdminRoutes>{children}</AdminRoutes>
    </ProtectedRoutes>
  );
}
