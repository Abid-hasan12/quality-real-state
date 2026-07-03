import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

const Home = () => {
  const saleProperties = properties.filter(property => property.type.toLowerCase() === 'sale');

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-12">
        <section id="properties" className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Properties for Sale</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {saleProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-2xl bg-slate-800 p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Want to Sell Your Property?</h2>
          <p className="mb-6">Join Quality Real Estate and reach thousands of buyers.</p>
          <Link to="/list-property" className="rounded-full bg-emerald-500 px-8 py-3 font-bold">
            List Your Property Now
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
