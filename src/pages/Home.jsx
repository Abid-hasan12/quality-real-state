import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

const Home = () => {
  const stats = [
    { value: '98%', label: 'Success rate' },
    { value: '1.2k+', label: 'Properties sold' },
    { value: '350+', label: 'Active listings' },
    { value: '24/7', label: 'Client support' },
  ];

  const socialLinks = [
    {
      label: 'Facebook',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.3l.7-3H13V9.8c0-.45.35-.8.8-.8Z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M6.5 8.5A2 2 0 1 1 6.5 4.5a2 2 0 0 1 0 4Zm-1.5 1.5h3v9h-3v-9Zm5 0h2.9v1.2h.04c.4-.75 1.38-1.55 2.84-1.55 3.04 0 3.7 2 3.7 4.6V19h-3v-4.1c0-.98-.02-2.24-1.36-2.24-1.37 0-1.58 1.07-1.58 2.17V19h-3v-9Z" />
        </svg>
      ),
    },
    {
      label: 'YouTube',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M21.7 8.2s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.3 5 12 5 12 5s-4.3 0-6.9.3c-.4 0-1.2.1-1.9.9-.6.6-.8 2-.8 2S2 9.8 2 11.4v1.2c0 1.6.3 3.2.3 3.2s.2 1.4.8 2c.7.8 1.6.8 2 .9 1.5.1 6.9.3 6.9.3s4.3 0 6.9-.3c.4 0 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.3-1.6.3-3.2v-1.2c0-1.6-.3-3.2-.3-3.2ZM10 15V9l5 3-5 3Z" />
        </svg>
      ),
    },
    {
      label: 'X',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M4 5h4.4l4.1 5.4L17 5h3l-5.9 7.4L20 19h-4.4l-4.4-5.8L6.6 19H3.6l6.1-7.7L4 5Zm4.8 1.4H6.8L16.9 17.7h1.8L8.8 6.4Z" />
        </svg>
      ),
    },
  ];

  const projectTags = ['Flat', 'House', 'Plot', 'Land', 'Share'];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main id="home" className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_34%),linear-gradient(135deg,_#0f172a_0%,_#0b1220_100%)] shadow-2xl"
        >
          <div className="grid gap-10 px-6 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-14">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                Premium real estate advisory
              </span>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Build, buy, and invest in properties with a trusted market partner.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Quality Real Estate connects serious buyers and sellers with a professional, high-conversion property experience built for modern clients.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/properties" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
                  Explore Properties
                </Link>
                <Link to="/list-property" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300">
                  Sell With Us
                </Link>
              </div>
              <div className="grid gap-3 pt-4 sm:grid-cols-3">
                {projectTags.map((tag) => (
                  <div key={tag} className="rounded-2xl border border-slate-800 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/80 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Quick insight</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">A cleaner way to move property.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  We pair strategic marketing, local expertise, and premium presentation to create stronger listings and better outcomes.
                </p>
                <Link to="/properties" className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                  View live inventory
                </Link>
              </div>

              <div className="rounded-[1.75rem] border border-emerald-500/20 bg-emerald-500/10 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Market focus</p>
                <p className="mt-3 text-lg font-medium text-white">
                  Tailored solutions for apartments, houses, plots, land, and share-based opportunities.
                </p>
                <Link to="/list-property" className="mt-6 inline-flex rounded-full border border-emerald-300 px-5 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-300 hover:text-slate-950">
                  Book a listing review
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <section id="buyers" className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8 shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Buyer section</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Find the right property with confidence.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Browse curated homes and investment opportunities matched to your location, budget, and long-term goals.
            </p>
            <Link to="/properties" className="mt-6 inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
              Start buying now
            </Link>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-[2rem] border border-emerald-500/20 bg-white p-8 shadow-xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">Seller section</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">List your property and attract serious buyers.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Present your asset with premium visuals, clear positioning, and a process designed to increase buyer trust and conversion.
            </p>
            <Link to="/list-property" className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Create a listing
            </Link>
          </motion.article>
        </section>

        <section id="stats" className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[1.75rem] border border-slate-800 bg-slate-900/90 p-6"
            >
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
              <Link to="/properties" className="mt-5 inline-flex text-sm font-semibold text-emerald-300 transition hover:text-emerald-200">
                Explore the numbers
              </Link>
            </motion.article>
          ))}
        </section>

        <section id="properties" className="space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Featured properties</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Recent listings ready to explore.</h2>
            </div>
            <Link to="/properties" className="inline-flex rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300">
              Browse all properties
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        <section id="social" className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Social media</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Stay connected across every channel.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Follow our latest market updates, new listings, and property stories across the platforms where your audience already spends time.
              </p>
            </div>
            <Link to="/" className="inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
              Follow our updates
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-4 text-sm font-medium text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-slate-800 bg-[linear-gradient(180deg,_rgba(16,185,129,0.12),_rgba(15,23,42,0.96))] p-8"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">About us</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A professional team built around trust and clarity.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Quality Real Estate helps clients buy and sell with a streamlined process, transparent communication, and presentation that feels premium from first click to closing.
            </p>
            <Link to="/list-property" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              Talk to our team
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Market expertise', text: 'Guidance grounded in practical property experience.' },
                { title: 'Premium marketing', text: 'Listings designed to convert attention into action.' },
                { title: 'Buyer support', text: 'Help finding the right location, price, and timing.' },
                { title: 'Seller strategy', text: 'High-impact listing plans for faster, stronger offers.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
            <Link to="/properties" className="mt-6 inline-flex rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300">
              Learn more about our process
            </Link>
          </motion.div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-emerald-500/20 bg-emerald-500/10 px-8 py-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Ready to talk about your next property move?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Call our team for direct support on buying, selling, or listing a property with a polished, professional process.
          </p>
          <a href="tel:+8801712345678" className="mt-6 inline-flex rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
            Call +88 01712-345678
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;