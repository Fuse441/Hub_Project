import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Lanyard from "@/components/reactbits/Components/Lanyard/Lanyard";
import Particles from "@/components/reactbits/Backgrounds/Particles/Particles";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/workfolio.webp",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      
          <div className="flex flex-col ">
            <Navbar />
            <div className="absolute  w-[100%]  h-[480%]">
                            <Particles
                              particleColors={["#3f2664", "#ffffff"]}
                              particleCount={700}
                              particleSpread={10}
                              speed={0.1}
                              particleBaseSize={350}
                              moveParticlesOnHover={false}
                              alphaParticles={false}
                              disableRotation={false}
                              className={undefined}
                            />
                          </div>
            <div className="absolute w-[100%] h-[400px] ">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
                
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Next JS And HeroUI (Fuse)</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
