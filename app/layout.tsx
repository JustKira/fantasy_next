import Navbar from "./navbar";
import "./globals.css";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import ProvidersWrapper from "@/utils/ProvidersWrapper";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const lizz = localFont({
  src: [
    {
      path: "./fonts/Lixdu.ttf",
      weight: "400",
    },
  ],
  variable: "--font-lizzieregular",
});

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${lizz.variable}`}>
      <body className="font-poppins bg-endless-white">
        <ProvidersWrapper>
          <Navbar />
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
