import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="max-w-5xl mx-auto flex justify-between py-4">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div className="space-x-8">
        <Link href="/">Products</Link>
        <Link href="/">Gallery</Link>
        <Link href="/">Forms</Link>
        <Link href="/">Contact</Link>
      </div>
    </nav>
  );
}
