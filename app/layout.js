import { Cabin } from "next/font/google";
import Navbar from "./Pages/Navbar/Navbar";
import Sidebar from "./Pages/Sidebar/Sidebar";
import "./global.css";
import Rightbar from "./Pages/Rightbar/Rightbar";

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
          <div className="flex flex-row gap-8 mx-6 p-6 bg-[#fff9f1]">
            <div className="basis-1/4">
              <Sidebar />
            </div>
            <div className="basis-1/2">{children}</div>
            <div className=" mx-6">
              <Rightbar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
