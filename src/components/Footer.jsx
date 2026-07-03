import { Link } from 'react-router-dom';
import { footerLinks, primaryNavLinks } from '../data/navigation';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/10 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="text-xl font-semibold text-white">
              Quality Real Estate
            </Link>
            <p className="max-w-sm text-sm leading-6 text-slate-400">
              A premium property platform for buyers, sellers, and investors looking for trusted real estate opportunities.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Quick Links</h3>
            <div className="grid gap-3 text-sm text-slate-400">
              {primaryNavLinks.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Legal</h3>
            <div className="grid gap-3 text-sm text-slate-400">
              {footerLinks.map((item) => (
                <a key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800/60 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Quality Real Estate. All rights reserved.</p>
          <p>Professional guidance for modern property decisions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
