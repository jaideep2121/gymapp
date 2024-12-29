import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Elite Fitness Training',
  description: 'Professional personal training and fitness guidance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Toaster></Toaster>
     <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
