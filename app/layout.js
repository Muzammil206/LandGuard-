
import { Inter } from "next/font/google";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./globals.css";
import { Session } from 'next-auth'
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LandGuide",
  description: "web-base cadastral Database",
};

export default function RootLayout({ children,session }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <AuthProvider session={session}>

          {children}
      </AuthProvider>
        </body>
      
    </html>
  );
}
