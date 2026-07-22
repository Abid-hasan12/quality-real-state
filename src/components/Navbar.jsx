import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contactLink, primaryNavLinks, projectLinks } from '../data/navigation';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 👈 এই ভেরিয়েবলটি ডিফাইন করা মিস হয়েছিল
  const isHome = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/properties';
  // Scroll effect for navbar background and shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled || !isHome
        ? 'bg-[rgba(7,24,45,0.90)] backdrop-blur-2xl shadow-2xl border-[rgba(255,255,255,0.08)]'
        : 'bg-transparent border-transparent'
        }`}
    >
      {/* Tiny Background Pattern / Noise overlay effect inside navbar */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none opacity-60"></div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-wide text-white group">
          <span className="text-xl">🏢</span>
          <span className="group-hover:text-emerald-400 transition-colors">Quality Real Estate</span>
        </Link>

        {/* Desktop Links & Dropdown */}
        <div className="hidden items-center gap-8 md:flex">
          {primaryNavLinks.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className="relative text-sm font-medium text-slate-300 transition hover:text-white py-1 group"
              >
                {item.label}
                {/* Animated underline & Active Emerald Line */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-emerald-400 transition-all duration-300 ${isActive ? 'w-full shadow-[0_0_10px_#34d399]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_8px_#34d399]'
                    }`}
                ></span>
              </Link>
            );
          })}

          {/* Projects Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProjectsOpen((value) => !value)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white py-1 group"
            >
              Projects
              <span className={`text-xs transition-transform duration-300 ${projectsOpen ? 'rotate-180' : ''}`}>▾</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#34d399]"></span>
            </button>

            {projectsOpen && (
              <div className="absolute left-0 top-full mt-3 w-48 overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[rgba(7,24,45,0.90)] backdrop-blur-2xl shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200">
                {projectLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-2.5 rounded-xl text-sm text-slate-300 transition hover:bg-emerald-500/10 hover:text-emerald-300 hover:shadow-[0_0_10px_rgba(52,211,153,0.15)]"
                    onClick={() => setProjectsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.08)] px-4 py-2 text-sm font-medium text-white transition hover:border-emerald-400 hover:text-emerald-300 md:hidden bg-[rgba(7,24,45,0.5)] backdrop-blur-md"
          onClick={() => setMobileMenuOpen((value) => !value)}
        >
          Menu
        </button>

        {/* Contact Button (Luxury Gradient: Emerald to Teal with Glow on hover) */}
        <Link
          to={contactLink.href}
          className="hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] hover:scale-105 md:inline-flex"
        >
          {contactLink.label}
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[rgba(255,255,255,0.08)] bg-[rgba(7,24,45,0.95)] backdrop-blur-2xl px-4 py-6 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-white tracking-wide pb-2 border-b border-[rgba(255,255,255,0.05)]"
            >
              🏢 Quality Real Estate
            </Link>

            {primaryNavLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition"
              >
                {item.label}
              </Link>
            ))}

            <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[rgba(7,24,45,0.5)] p-4 backdrop-blur-md">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-emerald-400 font-semibold">Projects</p>
              <div className="grid grid-cols-1 gap-2">
                {projectLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl bg-slate-900/60 px-3 py-2.5 text-sm text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-300 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to={contactLink.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:shadow-[0_0_15px_rgba(20,184,166,0.4)]"
            >
              {contactLink.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;