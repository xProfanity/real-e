import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { log } from "console";
import { NextRequest } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)"])

export default clerkMiddleware(async (auth, req) => {
    
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};