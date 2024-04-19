import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({ subsets: ["latin"] ,
  weight: "400"
});

export const metadata = {
  title: "Country Quiz",
  description: "How many do you know about the countries?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  );
}
