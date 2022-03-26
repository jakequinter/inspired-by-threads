import { useState } from 'react';
import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';

export default function Nav() {
  return (
    <nav className="max-w-5xl mx-auto flex justify-between px-4 lg:px-0 py-4">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div className="space-x-8 hidden sm:block">
        <Link href="/">Products</Link>
        <Link href="/">Gallery</Link>
        <Link href="/">Forms</Link>
        <Link href="/">Contact</Link>
      </div>
      <MobileNav />
    </nav>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden mr-2 inline-flex items-center focus:outline-none focus:ring-0 ">
      <Popover.Root open={open} onOpenChange={() => setOpen(!open)}>
        <Popover.Trigger className="flex items-center rounded-md p-1.5 hover:bg-slate-200 hover:text-slate-900">
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
          className="mt-6 flex w-40 flex-col rounded-lg border border-neutral-200 bg-white shadow outline-none focus:ring-0"
          align="end"
          alignOffset={12}
        >
          <Link href="/" passHref>
            <a className="inline-flex items-center p-2 hover:text-teal-500">
              Products
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="inline-flex items-center p-2 hover:text-teal-500">
              Gallery
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="inline-flex items-center p-2 hover:text-teal-500">
              Forms
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="inline-flex items-center p-2 hover:text-teal-500">
              Contact
            </a>
          </Link>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
