import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contactLink, primaryNavLinks, projectLinks } from '../data/navigation';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/10 bg-slate-950/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-wide text-white">
          Quality Real Estate
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {primaryNavLinks.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setProjectsOpen((value) => !value)}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Projects
              <span className="text-xs">▾</span>
            </button>

            {projectsOpen && (
              <div className="absolute left-0 top-full mt-3 w-44 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
                {projectLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-slate-300 transition hover:bg-emerald-500/10 hover:text-emerald-300"
                    onClick={() => setProjectsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-emerald-400 hover:text-emerald-300 md:hidden"
          onClick={() => setMobileMenuOpen((value) => !value)}
        >
          Menu
        </button>

        <a href={contactLink.href} className="hidden rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400 md:inline-flex">
          {contactLink.label}
        </a>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-800/30 bg-slate-950 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {primaryNavLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-300">
                {item.label}
              </a>
            ))}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">Projects</p>
              <div className="grid grid-cols-2 gap-2">
                {projectLinks.map((item) => (
                  <a key={item.label} href={item.href} className="rounded-xl bg-slate-800 px-3 py-2 text-sm text-slate-200">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <a href={contactLink.href} className="rounded-full bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-white">
              {contactLink.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
