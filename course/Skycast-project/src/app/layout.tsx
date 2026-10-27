import type { Metadata } from "next";
import {Roboto} from 'next/font/google'
import "./globals.css";
import ChildrenProvider from "@/childrenProvider";
import { UserContextProvider } from "@/context/UserContext";



const roboto = Roboto({
  subsets:['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-Roboto',
})


export const metadata: Metadata = {
  title: "Sky Cast",
  description: "My first Next JS project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
       <ChildrenProvider>
        <UserContextProvider>

        {children}
        </UserContextProvider>

       </ChildrenProvider>

       
      </body>
    </html>
  );
}



