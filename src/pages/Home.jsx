import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 space-y-16">

        {/* ১. বায়ার সেকশন */}
        <section className="bg-slate-900 text-white p-16 rounded-3xl text-center shadow-xl">
          <h2 className="text-5xl font-extrabold mb-6">Want to Buy a Property?</h2>
          <p className="text-xl mb-10 opacity-80 max-w-2xl mx-auto">Explore our curated collection of luxury homes and investment properties tailored for your lifestyle.</p>
          <Link to="/properties" className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold transition duration-300 text-lg">
            Buy Your Property Now
          </Link>
        </section>

        {/* ২. সেলার সেকশন */}
        <section className="bg-white border border-slate-200 p-16 rounded-3xl text-center shadow-lg">
          <h2 className="text-5xl font-extrabold mb-6 text-slate-900">Want to Sell Your Property?</h2>
          <p className="text-xl mb-10 opacity-80 max-w-2xl mx-auto text-slate-600">List your property with us and connect with thousands of qualified buyers effortlessly.</p>
          <Link to="/list-property" className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold transition duration-300 text-lg">
            List Your Property Now
          </Link>
        </section>

        {/* ৩. এবাউট আস সেকশন */}
        <section className="p-12 bg-white rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-10">
          <div className="w-32 h-32 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 font-bold text-2xl border-2 border-emerald-200">
            QRE
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-slate-900">About Quality Real Estate</h3>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              Quality Real Estate is your trusted partner in the property market. With over a decade of experience, we specialize in helping families find their dream homes and assisting investors in maximizing their returns. We believe in transparency, integrity, and personalized service.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};
export default Home;