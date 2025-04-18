import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignOutButton,  } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Image from "next/image";
import { Drawer, SearchInput, UserProfile } from "@/app-components";
import { ConvexClientProvider } from "@/app/ConvexClient";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div>
                  <div className='w-full shadow-sm'>
                      <header className='h-16 w-full max-w-sm md:max-w-screen-xl mx-auto flex flex-row justify-between items-center'>
                          <Link href="/">
                            <Image
                                alt='logo'
                                src={'/rented-color.png'}
                                width={100}
                                height={100}
                                blurDataURL="./rented-color.png"
                                className="object-cover hidden md:block"
                            />
                            <Image
                                alt='logo'
                                src={'/logo.png'}
                                width={50}
                                height={50}
                                blurDataURL="./rented-color.png"
                                className="object-cover block md:hidden"
                            />
                          </Link>
          
                          <SearchInput />
                          
                          <div className="hidden md:block">
                            <SignedIn>
                                <UserProfile />
                            </SignedIn>
                          </div>

                          <div className="block md:hidden">
                            <Drawer />
                          </div>
          
                          <SignedOut>
                              <SignInButton>
                                <button type="button" className='text-sm font-bold h-12 px-10 bg-primary-500 text-white cursor-pointer rounded-lg'>
                                    Log in
                                </button>
                              </SignInButton>
                          </SignedOut>
                      </header>
                  </div>

                  <ConvexClientProvider>
                    <main className="min-h-screen w-full max-w-screen-lg mx-auto mt-10">{children}</main>
                  </ConvexClientProvider>

                  <footer className="mt-16 pb-10 mx-auto w-full flex flex-col justify-center items-center">
                    <p className="text-sm text-gray-400">end</p>
                  </footer>
              </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
