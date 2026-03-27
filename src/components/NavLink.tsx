'use client';

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NavLinkCompatProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className"
> &
  LinkProps & {
  className?: string;
  activeClassName?: string;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const hrefPath = typeof href === "string" ? href : href.pathname ?? "";
    const isActive = hrefPath ? pathname === hrefPath : false;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };