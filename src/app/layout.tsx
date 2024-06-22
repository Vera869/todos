import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "ToDo List",
 
// };

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/image/icon-notepad.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ToDo List</title>
      </head>
      <body className={caveat.className}>{children}</body>
    </html>
  );
}
