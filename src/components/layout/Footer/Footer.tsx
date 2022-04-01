import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mx-auto border-t border-slate-200 py-4 text-sm text-slate-500">
      <div className="mx-auto flex max-w-screen-lg justify-between">
        <div>logo</div>
        <div className="space-x-8">
          <Link href="/privacy">Privacy</Link>
          <Link href="/legal">Legal</Link>
        </div>
      </div>
    </footer>
  );
}
