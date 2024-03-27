import { Cabin } from "next/font/google";
import Navbar from "./Pages/Navbar/Navbar";
import Sidebar from "./Pages/Sidebar/Sidebar";
import "./global.css";

const inter = Cabin({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-lg font-semibold">
         <div className="py-5 mx-4">
         <Navbar />
         </div>
          <div className="flex gap-8 mx-6">
            <Sidebar />
          </div>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
