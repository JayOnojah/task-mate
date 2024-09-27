import Link from "next/link";
import { Medal } from "lucide-react";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/Eina01-Bold.ttf",
});

const semiboldFont = localFont({
  src: "../../public/fonts/Eina01-SemiBold.ttf",
});

const textFont = localFont({
  src: "../../public/fonts/Eina01-Regular.ttf",
});

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}>
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="size-6 mr-2" />
          <span className="word-spacing">#1 Task Management Platform</span>
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Helping teams advance.
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          The Forward Tool
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-600 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          semiboldFont.className
        )}>
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works unique -
        accomplish it all with TaskMate.
      </div>
      <Button className="mt-6 text-lg" size="lg" asChild>
        <Link href="/sign-up">Get Started for Free</Link>
      </Button>
    </div>
  );
};

export default LandingPage;
