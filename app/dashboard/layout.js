import ThemeProvider from "@/components/theme/ThemeProvider";
import { Inter } from "next/font/google";
import TopNav from "@/components/navigations/TopNav";
import SideNav from "@/components/navigations/SideNav";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stock Manager Application",
  description:
    "Next JS App for managing the stocks in an easy and effective manner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 relative ${inter.className}`}>
        <ThemeProvider>
          <TopNav />
          <div className="flex flex-row justify-between items-stretch gap-0">
            <SideNav />
            <div className="w-full min-h-screen bg-base-200">
              <div className="container mx-auto p-5">{children}</div>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
