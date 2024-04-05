import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnonymousAID",
  description: "Anonymous, yet united.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light flex items-center justify-center">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
