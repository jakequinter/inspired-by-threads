import Image from 'next/image';
import Link from 'next/link';
import { RiFacebookCircleFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="mx-auto border-t border-slate-200 px-4 py-4 text-sm text-slate-500 lg:px-0">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between">
        <div className="flex items-center">
          <Image
            className="cursor-pointer"
            src="/images/logo.png"
            height="36"
            width="30"
            alt="Inspired by Threads logo"
          />
          <span className="ml-4 hidden sm:block">
            &copy; {new Date().getFullYear()} Inspired by Threads
          </span>
        </div>
        <div className="space-x-8">
          <Link href="/privacy">Privacy</Link>
          <Link href="https://facebook.com/InspiredbyThreads" passHref>
            <a>
              <RiFacebookCircleFill className="inline h-5 w-5 text-[#4267B2]" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
