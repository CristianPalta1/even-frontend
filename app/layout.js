import Head from "next/head";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>EventHub</title>
        </Head>
        <body>
          <div className="mx-36 text-2xl">
            <Navbar />
            <div className="flex flex-col items-center text-center mt-32">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
