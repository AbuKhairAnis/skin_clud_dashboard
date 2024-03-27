import './global.css';


export const metadata = {
  title: "Admin Dashboard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
