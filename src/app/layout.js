import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar"
import { useUser } from '@auth0/nextjs-auth0/client';
import { EdgeStoreProvider } from '../lib/edgestore';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnonymousAID",
  description: "Anonymous, yet united.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light">
      <EdgeStoreProvider>
        <ChakraProvider>
          <Navbar />
          <div className="px-2 mt-2 min-h-screen">
            {children}
          </div>
        </ChakraProvider>
      </EdgeStoreProvider>
      </body>
    </html>
  );
}
