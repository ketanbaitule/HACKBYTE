import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnonymousAID",
  description: "Anonymous, yet united.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light">
        <ChakraProvider>
         
          <div className="px-2 mt-2">
            {children}
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
