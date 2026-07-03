import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 md:py-12 space-y-8 md:space-y-16">

        {/* বায়ার সেকশন */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 text-white p-8 md:p-16 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-shadow"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Want to Buy a Property?</h2>
          <p className="text-base md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">Explore our curated collection of luxury homes and investment properties.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/properties" className="block md:inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg">
              Buy Your Property Now
            </Link>
          </motion.div>
        </motion.section>

        {/* সেলার সেকশন */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 p-8 md:p-16 rounded-3xl text-center shadow-lg hover:border-emerald-500 transition-colors"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">Want to Sell Your Property?</h2>
          <p className="text-base md:text-xl mb-8 opacity-80 max-w-2xl mx-auto text-slate-600">List your property and reach thousands of buyers.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/list-property" className="block md:inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg">
              List Your Property Now
            </Link>
          </motion.div>
        </motion.section>

        {/* এবাউট সেকশন */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-6 md:p-12 bg-white rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center text-center md:flex-row md:text-left gap-6"
        >
          <div className="w-20 h-20 md:w-32 md:h-32 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 font-bold text-xl md:text-2xl flex-shrink-0">
            QRE
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">About Us</h3>
            <p className="text-slate-600 leading-relaxed">
              Quality Real Estate is your trusted partner. We specialize in finding your dream home with transparency and integrity.
            </p>
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
};

export default Home;