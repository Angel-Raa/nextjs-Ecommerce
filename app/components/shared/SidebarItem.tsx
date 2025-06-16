import Link from "next/link";
import React from "react";

interface Props {
  href?: string;
  action?: () => Promise<void>;
  icon: React.ReactNode;
  title: string;
}

export const SidebarItem = ({ href, action, icon, title }: Props) => {
  if (action) {
    return (
      <button
        onClick={action}
        className="flex items-center mt-4 md:mt-10 p-2 md:p-3 hover:bg-gray-100 rounded transition-all w-full text-left"
      >
        {icon}
        <span className="ml-2 md:ml-3 text-base md:text-xl hidden sm:inline">
          {title}
        </span>
      </button>
    );
  }

  return (
    <Link
      href={href || "#"}
      className="flex items-center mt-4 md:mt-10 p-2 md:p-3 hover:bg-gray-100 rounded transition-all"
    >
      {icon}
      <span className="ml-2 md:ml-3 text-base md:text-xl hidden sm:inline">
        {title}
      </span>
    </Link>
  );
};
