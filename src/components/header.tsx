"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#" },
  { label: "The Course", href: "#course" },
  { label: "Membership", href: "#membership" },
  { label: "Visitors", href: "#visitors" },
  { label: "Dining", href: "#dining" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="#" className="relative z-10 flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Silver Pines Golf Club"
              width={140}
              height={60}
              className="h-12 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-light tracking-wider text-white/80 hover:text-white transition-colors duration-300 uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-xs font-medium tracking-widest uppercase text-white border border-white/30 hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Book Tee Time
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden relative z-10 p-2 text-white"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] bg-charcoal border-charcoal-light p-0"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full pt-20 px-8">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-light tracking-wider text-white/80 hover:text-white transition-colors uppercase"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-12">
                  <Link
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center px-6 py-3 text-xs font-medium tracking-widest uppercase text-white border border-white/30 hover:bg-white hover:text-charcoal transition-all duration-300"
                  >
                    Book Tee Time
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
