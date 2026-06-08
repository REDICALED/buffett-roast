import Link from "next/link";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/indicators", label: "Indicators" },
];

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 text-sm font-black text-white">
            BR
          </span>
          <span>
            <span className="block text-sm font-semibold text-zinc-950">Buffett Roast</span>
            <span className="hidden text-xs text-zinc-500 sm:block">Meme sentiment terminal</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-white hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
