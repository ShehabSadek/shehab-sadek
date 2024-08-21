"use client"

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from 'next/image';

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export function AppBar() {
const { theme, setTheme } = useTheme()
const [mounted, setMounted] = React.useState(false);

React.useEffect(() => {
  setMounted(true);
}, [])

const SwitchTheme = () => {
  setTheme(theme === "dark" ? "light" : "dark");
};

function Logo(props: React.ComponentProps<typeof Image>) {
  if (!mounted) {
    return <Image {...props} src={"/logo.png"} alt="Logo" />;
  }
  return (
    <Image
      {...props}
      src={theme === "dark" ? "/logo_white.png" : "/logo.png"}
      alt="Logo"
    />
  );
}
const loaderProp =({ src }:{ src:any }) => {
  return src;
}
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div>
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Logo width={"150"} height={"150"} src={""} alt={""} blurDataURL="data:..." placeholder="blur" unoptimized={true} loader={loaderProp}/>
          <h1 className="text-lg font-bold">Shehab Sadek</h1>
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        <Link href="#" className="text-3xl font-medium relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" prefetch={false}>
          About Me
        </Link>
        <Link href="#" className="text-3xl font-medium relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" prefetch={false}>
        Skills
        </Link>
        <Link href="#" className="text-3xl font-medium relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" prefetch={false}>
        Experience
        </Link>
        <Link href="#" className="text-3xl font-medium relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black dark:after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" prefetch={false}>
          Contact
        </Link>
        </div>
        <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={SwitchTheme} className="float-right">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle Theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <div className="grid w-[200px] p-4">
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            About Me
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            Experience
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
            </Link>
            <Button variant="outline" size="icon" onClick={SwitchTheme}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      </div>
  )
}
function MenuIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}