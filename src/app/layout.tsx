import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "create next ",
  description: "This is Home Dashboard for Miraj Qurban",
};

export default function RootLayout({
  children,
  organizationsModal,
}: {
  children: React.ReactNode;
  organizationsModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {organizationsModal}

        {children}
      </body>
    </html>
  );
}
