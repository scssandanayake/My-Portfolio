"use client";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci"; //importing the menu icon from react-icons
import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services_page",
  },
  {
    name: "Resume",
    path: "/resume_page",
  },
  {
    name: "Works",
    path: "/works_page",
  },
  {
    name: "Contact",
    path: "/contact_page",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              <span className="text-accent">C</span>HAM
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* navigation */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
//there are no errors in this file
