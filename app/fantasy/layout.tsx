import AdminRoutes from "@/utils/AdminRoutes";
import ProfileRequiredRoutes from "@/utils/ProfileRequiredRoutes";
import FantasyNavbar from "./fantasyNavbar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProfileRequiredRoutes>
      <div className="flex flex-col min-h-screen items-center px-32 bg-w1 bg-fixed bg-center">
        <div className="relative w-full bg-endless-white drop-shadow-lg mt-32 pb-12 border border-gray-200 flex flex-col items-center">
          <div className="w-full">
            <FantasyNavbar />
          </div>

          {children}
        </div>
      </div>
    </ProfileRequiredRoutes>
  );
}
