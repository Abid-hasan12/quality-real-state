import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <span className="text-lg font-semibold text-slate-900">Quality Real Estate</span>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#properties" className="hover:text-slate-900">Properties</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
