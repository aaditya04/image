"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "#83C0C1",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        marginTop: "0",
        width: "100%",
        height: "10%",
        position: "fixed",
        paddingBottom: "10px",
        top: "0",
        zIndex: "999", // Ensure the navbar is on top of other content
      }}
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* <Link href="/" className="navbar-logo" style={{ cursor: "pointer" }}>
            <Image
              src="/assets/images/logo-text.svg"
              alt="logo"
              width={180}
              height={28}
            />
          </Link> */}

          <ul className="flex items-center space-x-4 flex-grow" style={{marginTop:"10px"}}>
            {navLinks.map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`group ${
                    isActive ? "bg-purple-gradient text-white" : "text-gray-700"
                  }`}
                >
                  <Link
                    className="flex items-center"
                    href={link.route}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Image
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    <span className="ml-2">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center space-x-4" style={{marginTop:"10px", color: "white" }}> 
            <SignedIn>
              <UserButton afterSignOutUrl="/" showName />
            </SignedIn>

            <SignedOut>
              <Button asChild className="button bg-purple-gradient bg-cover">
                <Link href="/sign-in" style={{ textDecoration: "none", color: "white" }}>Login</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
