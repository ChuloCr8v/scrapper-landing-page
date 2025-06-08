import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  link: string;
  icon: any;
  text: string;
  className?: string;
};

const SecondaryButton = ({ link, icon, text, className }: Props) => {
  return (
    <button
      type="button"
      className={twMerge(
        "md:max-w-[200px] w-full p-4 rounded-xl border hover:border-primary hover:text-primary duration-300 bg-white/20 backdrop-blur-xl",
        className
      )}
    >
      <Link
        href={link}
        className="flex items-center gap-2 w-full justify-center"
      >
        {text}
        {icon}
      </Link>
    </button>
  );
};

export default SecondaryButton;
