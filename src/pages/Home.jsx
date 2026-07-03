import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const successStats = [
    {
      value: '500+',
      label: 'Properties Sold',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M4 10.5 12 4l8 6.5" />
          <path d="M6.5 9.5V20h11V9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      ),
    },
    {
      value: '200+',
      label: 'Happy Clients',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M16.5 19a4.5 4.5 0 0 0-9 0" />
          <circle cx="12" cy="8" r="3.5" />
          <path d="M18.5 19a3.8 3.8 0 0 0-2.3-3.2" />
          <path d="M16 4.8a3.5 3.5 0 0 1 0 6.9" />
        </svg>
      ),
    },
    {
      value: '15+',
      label: 'Years of Experience',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M12 7v5l3 2" />
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      ),
    },
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
      label: 'Twitter',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M19.4 7.3c.01.16.01.32.01.49 0 5.02-3.82 10.8-10.8 10.8-2.14 0-4.12-.63-5.79-1.71.3.03.6.04.91.04 1.77 0 3.4-.6 4.7-1.62-1.66-.03-3.05-1.12-3.53-2.61.23.04.46.07.7.07.34 0 .68-.05 1-.13-1.73-.35-3.03-1.87-3.03-3.71v-.05c.51.28 1.1.44 1.72.46a4.1 4.1 0 0 1-1.28-5.46 11.62 11.62 0 0 0 8.44 4.28 4.62 4.62 0 0 1-.1-.94 4.1 4.1 0 0 1 7.09-2.8 8.14 8.14 0 0 0 2.6-1c-.3.92-.92 1.7-1.73 2.19.8-.1 1.57-.31 2.28-.63a8.82 8.82 0 0 1-2.05 2.13Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <main>
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-slate-900 text-white"
        >
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Build, buy, and invest in properties with a trusted market partner.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Quality Real Estate connects serious buyers and sellers with a professional, high-conversion property experience.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/properties"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-emerald-400"
                >
                  Explore Properties
                </Link>
                <Link
                  to="/list-property"
                  className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-slate-900"
                >
                  List Your Property
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl bg-slate-50 p-8 sm:p-10"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Buyer section
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Discover curated properties with a smoother search experience and a trusted team ready to guide your next purchase.
              </p>
              <Link
                to="/properties"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Start buying now
              </Link>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl bg-emerald-50 p-8 sm:p-10"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Seller section
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Present your property with clarity, reach serious buyers faster, and move forward with a listing process built for results.
              </p>
              <Link
                to="/list-property"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Create a listing
              </Link>
            </motion.article>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
        >
          <div className="rounded-3xl bg-slate-50 px-6 py-10 sm:px-8 lg:px-10">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">Success rate</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Measured results, presented with clarity.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {successStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      {stat.icon}
                    </span>
                    <div>
                      <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
                      <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
        >
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">About us</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Built on trust, guided by expertise.
            </h2>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Quality Real Estate helps buyers and sellers make better property decisions through a clear process, thoughtful guidance, and a calm professional experience. Our mission is to keep the journey simple while delivering strong outcomes.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
        >
          <div className="rounded-3xl bg-slate-50 px-6 py-10 text-center sm:px-8 lg:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">Social media</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Connect with us on social media
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;