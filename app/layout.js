import { Inter } from "next/font/google";
import Navbar from './Pages/Navbar/Navbar';
import Sidebar from './Pages/Sidebar/Sidebar';
import './global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='text-lg'>
          <div >
            <Navbar />
          <div className="flex gap-8 mx-6">
            <Sidebar />
            {children}
          </div>
          </div>
        </div>
        </body>
    </html>
  );
}
