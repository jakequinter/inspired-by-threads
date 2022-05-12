import { useEffect, useState } from 'react';
import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';

type NavLinkProps = {
  href: string;
  text: string;
  isMobile?: boolean;
};
const NavLink = ({ href, text, isMobile = false }: NavLinkProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window.location.pathname === href) setIsActive(true);
  }, [href]);

  return (
    <Link href={href} passHref>
      <a
        className={`${
          isActive
            ? 'text-teal-600 hover:text-teal-600'
            : 'hover:text-slate-500'
        } ${
          isMobile
            ? 'inline-flex items-center px-4 py-2 hover:text-slate-500'
            : ''
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        {text}
      </a>
    </Link>
  );
};

export default function Nav() {
  return (
    <nav className="mx-auto flex max-w-screen-lg justify-between px-4 py-4 lg:px-0">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div className="hidden space-x-8 sm:block">
        <NavLink href="/products" text="Products" />
        <NavLink href="/gallery" text="Gallery" />
        <NavLink href="/contact" text="Contact" />
      </div>
      <MobileNav />
    </nav>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mr-2 inline-flex items-center focus:outline-none focus:ring-0 sm:hidden">
      <Popover.Root open={open} onOpenChange={() => setOpen(!open)}>
        <Popover.Trigger
          onClick={() => setOpen(!open)}
          className="flex items-center rounded-md p-1.5 hover:bg-slate-200 hover:text-slate-900"
        >
          {!open ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4.75 5.75H19.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4.75 18.25H19.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4.75 12H19.25"
              ></path>
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth=""
                d="M17.25 6.75L6.75 17.25"
              ></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M6.75 6.75L17.25 17.25"
              ></path>
            </svg>
          )}
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Content
          className="mt-6 flex w-60 flex-col rounded-lg border border-neutral-200 bg-white shadow outline-none focus:ring-0"
          align="end"
          alignOffset={12}
        >
          <NavLink isMobile href="/products" text="Products" />
          <NavLink isMobile href="/gallery" text="Gallery" />
          <NavLink isMobile href="/contact" text="Contact" />
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
