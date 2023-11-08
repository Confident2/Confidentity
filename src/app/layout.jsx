import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/context/themecontext";
import AuthProvider from "@/components/authprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "Generated by Michael Anigboya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + "dark:bg-slate-700 dark:text-white"}>
        <ThemeProvider>
          <AuthProvider>
            <div className="max-w-screen-xl min-h-screen mx-auto p-8 flex flex-col justify-between">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
