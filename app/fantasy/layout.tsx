import AdminRoutes from "@/utils/AdminRoutes";
import ProfileRequiredRoutes from "@/utils/ProfileRequiredRoutes";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProfileRequiredRoutes>{children}</ProfileRequiredRoutes>;
}
