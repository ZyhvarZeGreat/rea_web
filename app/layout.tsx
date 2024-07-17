import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import QueryClientProvider from "./QueryClientProvider";
import NextTopLoader from "nextjs-toploader";
import { nunito } from "@/components/fonts/fonts";
// import { ProviderUI } from "@/components/providers/ProviderUI";

export const metadata: Metadata = {
  title: "Rea Web App",
  description: "Enjoy the benefits of property ownership without the headaches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link
      rel="apple-touch-icon"
      href="/apple-touch-icon.png"
      type="image/<generated>"
      sizes="<generated>"
    />
    <link
      rel="icon"
      href="/favicon-32x32.png"
      type="image/<generated>"
      sizes="<generated>"
    />

    <body className={`${nunito.className}`}>
    <NextTopLoader height={5} color="#fff" />
    <QueryClientProvider>
      {/*<ProviderUI>*/}
      <div className="flex flex-col   ">

        {children}

      </div>
      {/*</ProviderUI>*/}
      <Toaster richColors expand={true} closeButton />
    </QueryClientProvider>
    </body>
    </html>
  );
}
