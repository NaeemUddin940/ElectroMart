"use client";
import { Heart, Moon, ShoppingCart, Sun, User } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import RippleButton from "../ui/RippleButton";

export default function MainHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to dark mode

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Re-run when isDarkMode changes

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="shadow-2xl">
        {" "}
        <header className="bg-background border-b-1 border-t-1">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex lg:flex-row items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <img
                  src={"/PollenPop.png"}
                  alt="ElectroMart"
                  className="h-10"
                />
                <div className="leading-5">
                  <h2>Electro</h2>
                  <h3>Mart</h3>
                </div>
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center">
                <Link
                  href="/"
                  className="flex items-center gap-1 cursor-pointer">
                  <span className="font-bold text-sm uppercase">
                    <RippleButton
                      className={
                        "px-2 py-1 rounded-2xl text-chart-2  hover:text-foreground"
                      }>
                      Home
                    </RippleButton>
                  </span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-1 cursor-pointer">
                  <span className="font-bold text-sm uppercase">
                    <RippleButton
                      className={
                        "px-2 py-1 rounded-2xl text-chart-2  hover:text-foreground"
                      }>
                      New Arrival
                    </RippleButton>
                  </span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-1 cursor-pointer">
                  <span className="font-bold text-sm uppercase">
                    <RippleButton
                      className={
                        "px-2 py-1 rounded-2xl text-chart-2  hover:text-foreground"
                      }>
                      Popular
                    </RippleButton>
                  </span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-1 cursor-pointer">
                  <span className="font-bold text-sm uppercase">
                    <RippleButton
                      className={
                        "px-2 py-1 rounded-2xl text-chart-2  hover:text-foreground"
                      }>
                      About
                    </RippleButton>
                  </span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-1 cursor-pointer">
                  <span className="font-bold text-sm uppercase">
                    <RippleButton
                      className={
                        "px-2 py-1 rounded-2xl text-chart-2  hover:text-foreground"
                      }>
                      Contact
                    </RippleButton>
                  </span>
                </Link>
              </nav>

              {/* User Actions */}
              <div className="flex items-center gap-4">
                <div className="text-xs text-center">
                  <div className="text-gray-600 uppercase">welcome</div>
                  <div className="flex items-center gap-3">
                    <Link href={"#"} className="font-bold uppercase">
                      log in
                    </Link>
                    <span>|</span>
                    <Link href={"#"} className="font-bold uppercase">
                      Register
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <RippleButton className="rounded-full p-2 flex items-center justify-center">
                    <User className="w-5 h-5 dark:text-gray-200" />
                  </RippleButton>
                  {/* <div className="relative hidden hover:bg-input/90 cursor-pointer  p-2 rounded-full">
                  </div> */}
                  <RippleButton className="rounded-full p-2 flex items-center justify-center">
                    <Heart className="w-5 h-5 dark:text-gray-200" />
                  </RippleButton>
                  <RippleButton className="rounded-full p-2 flex items-center justify-center">
                    <div className="relative overflow-visible">
                      <ShoppingCart className="w-5 h-5 z-10 overflow-visible dark:text-gray-200" />
                      <span className="absolute -top-1 -right-1 animate-bounce bg-chart-1 text-black font-bold text-xs rounded-full w-4 h-4 flex items-center justify-center z-2000">
                        4
                      </span>
                    </div>
                  </RippleButton>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className=" p-2 rounded-full cursor-pointer
                  hover:bg-input/90
                   transition-colors duration-300"
                  aria-label="Toggle dark mode">
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 dark:text-gray-200 " />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                {/* <div className="text-xs text-center">
                <div className="text-gray-600 uppercase">cart</div>
                <div className="font-bold uppercase">$1,689.00</div>
              </div> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
