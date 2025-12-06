import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vehicle AI",
  description: "Get your dream car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <Header />
          <main className="min-h-screen"> {children}</main>
          <Toaster richColors/>
          <footer className="flex justify-center bg-blue-100 py-12">
            <div className="text-gray-900 text-center container text-lg">
              <p> @2025 Vehicle AI</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
