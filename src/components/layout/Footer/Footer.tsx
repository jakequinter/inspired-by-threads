import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mx-auto py-4 text-slate-500 text-sm">
      <div className="flex justify-between mx-auto max-w-screen-lg">
        <div>logo</div>
        <div className="space-x-8">
          <Link href="/privacy">Privacy</Link>
          <Link href="/legal">Legal</Link>
        </div>
      </div>
    </footer>
  );
}
