import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  icon: any;
  link: string;
  text: string;
  className?: string;
};

const PrimaryButton = ({ icon, link, text, className }: Props) => {
  return (
    <button
      type="button"
      className={twMerge(
        "md:max-w-[200px] w-full p-4 rounded-xl !bg-gradient-to-r overflow-hidden to-blue-800 from-primary hover:from-blue-800 hover:to-primary duration-300 text-white",
        className
      )}
    >
      <Link
        href={link}
        className="flex items-center justify-center gap-2 w-full"
      >
        {text}
        {icon}
      </Link>
    </button>
  );
};

export default PrimaryButton;
