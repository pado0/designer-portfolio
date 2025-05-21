'use client';
import Link from "next/link";
import { useState } from "react";

const MENU = [
  { label: "Projects", href: "/#projects" },
  { label: "About Me", href: "/#about" },
  { label: "Resume", href: "/resume" },
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="text-xl font-bold tracking-tight text-[#455dfe] select-none">
          Portfolio
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {MENU.map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors px-2 py-1 rounded hover:text-[#455dfe] focus:text-[#455dfe] focus:outline-none"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors px-2 py-1 rounded hover:text-[#455dfe] focus:text-[#455dfe] focus:outline-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[#455dfe]"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1">
            <span className={`block h-0.5 w-6 bg-[#455dfe] transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-[#455dfe] transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-[#455dfe] transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
        {/* Mobile Menu Drawer */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setOpen(false)}>
            <div
              className="absolute right-0 top-0 w-56 bg-white shadow-lg h-full flex flex-col py-6 px-6 gap-4 animate-slide-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="self-end mb-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#455dfe]"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg width="24" height="24" fill="none" stroke="#455dfe" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <ul className="flex flex-col gap-4">
                {MENU.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-colors px-2 py-2 rounded hover:text-[#455dfe] focus:text-[#455dfe] focus:outline-none"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block transition-colors px-2 py-2 rounded hover:text-[#455dfe] focus:text-[#455dfe] focus:outline-none"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
} 