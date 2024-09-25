
import { Inter } from "next/font/google";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LandGuide",
  description: "web-base cadastral Database",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">

      <body className={inter.className}>
  
     
          {children}

        </body>
      
    </html>
    </ClerkProvider>
  );
}
