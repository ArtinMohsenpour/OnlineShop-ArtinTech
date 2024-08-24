"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-primary text-primary-foreground text-cyan-100 flex justify-center px-4">
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathName = usePathname(); //usePathname() is a hook that retrieves the current URL path of the web application. It returns a string that represents the path of the current route, which can be used within the component where it's called.
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathName == props.href && "bg-background text-foreground"
      )}
    />
  );
}
