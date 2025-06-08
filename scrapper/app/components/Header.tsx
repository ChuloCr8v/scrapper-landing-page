"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaBars } from "react-icons/fa";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  // Track scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 100) {
      // Scrolling down
      setHidden(true);
    } else if (latest < lastScrollY) {
      // Scrolling up
      setHidden(false);
    }
    setLastScrollY(latest);
  });

  // Mobile detection
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 767);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Auto-show nav on desktop
  useEffect(() => {
    setShowNav(!isMobile);
  }, [isMobile]);

  const navItems = [
    { title: "Features", link: "#features" },
    { title: "Use Cases", link: "#use-cases" },
    { title: "How it works", link: "#how-it-works" },
    { title: "Demo", link: "#demo" },
    { title: "Pricing", link: "#pricing" },
    { title: "Testimonial", link: "#testimonial" },
    { title: "FAQ", link: "#faq" },
  ];

  return (
    <motion.header
      className={twMerge(
        "w-screen fixed top-0 left-0 border-b bg-white/20 backdrop-blur-lg z-50 overflow-hidden"
      )}
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:justify-between overflow-hidden">
        {/* Rest of your header content remains the same */}
        <div className="flex items-center justify-between w-full md:w-fit relative z-50">
          <Link
            href="#hero"
            className="flex items-center space-x-2"
            onClick={() => setShowNav(!isMobile)}
          >
            <span className="text-primary font-black text-2xl">
              P<span className="text-red-600">W</span>
            </span>
          </Link>

          <FaBars
            className={twMerge("text-xl md:hidden")}
            onClick={() => setShowNav(!showNav)}
          />
        </div>

        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{
            opacity: showNav ? 1 : 0,
            height: showNav ? "auto" : 0,
            paddingTop: showNav && isMobile ? 48 : 0,
          }}
          className="w-full md:w-fit md:space-x-6 space-y-2 h-full md:space-y-0 overflow-hidden md:flex items-center"
        >
          {navItems.map((item, index) => (
            <Link
              onClick={() => isMobile && setShowNav(false)}
              href={item.link}
              key={index}
              className={twMerge(
                "md:text-sm font-medium hover:text-primary group relative duration-200 block md:pt-1 text-gray-700"
              )}
            >
              {item.title}
              <div className="w-0 h-[2.5px] bg-primary duration-200 group-hover:w-full"></div>
            </Link>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
