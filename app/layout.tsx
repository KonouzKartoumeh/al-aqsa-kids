import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aksana - Learn About Al-Quds",
  description: "Interactive educational game about Al-Quds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="bg-green-600 text-white mt-16 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">About Aksana</h3>
                <p>Learn about Al-Quds through fun and interactive games!</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p>Email: info@aksana.com</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
