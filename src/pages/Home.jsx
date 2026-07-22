import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { projects } from '../data/data';

const successStats = [
  { value: '250+', label: 'Properties Sold', icon: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 10.5 12 4l8 6.5" /><path d="M6.5 9.5V20h11V9.5" /><path d="M10 20v-5h4v5" /></svg> },
  { value: '200+', label: 'Happy Clients', icon: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16.5 19a4.5 4.5 0 0 0-9 0" /><circle cx="12" cy="8" r="3.5" /><path d="M18.5 19a3.8 3.8 0 0 0-2.3-3.2" /><path d="M16 4.8a3.5 3.5 0 0 1 0 6.9" /></svg> },
  { value: '5+', label: 'Years of Experience', icon: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 7v5l3 2" /><circle cx="12" cy="12" r="8.5" /></svg> },
  { value: '99%', label: 'Satisfaction Rate', icon: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg> },
];

const whyChooseUsData = [
  { title: 'Verified Properties', desc: 'Every listing undergoes strict legal and structural verification for safe investment.' },
  { title: 'Expert Guidance', desc: 'Professional consultants with deep market insight to guide your buying and selling.' },
  { title: 'Transparent Process', desc: 'No hidden fees or complex documentation; complete clarity at every step.' },
];

const faqData = [
  { q: 'How can I buy a property through your platform?', a: 'You can explore our available listings on the Buy page, check details, and contact our agents directly.' },
  { q: 'Are all listed properties verified?', a: 'Yes, every single property is thoroughly verified for legal compliance and clear documentation.' },
  { q: 'How do I list my property for sale?', a: 'Simply go to the List Your Property page, fill out the form with details, and submit it to our review team.' },
];

const Home = () => {
  const latestProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm bg-emerald-50 px-4 py-1.5 rounded-full inline-block">Why Choose Us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">Your Trusted Real Estate Partner</h2>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {whyChooseUsData.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-6">0{idx + 1}</div>
                  <h3 className="text-xl font-bold text-slate-950 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Statistics */}
        <section className="py-20 bg-slate-900 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">success stories</h3>
          <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStats.map((stat, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700/60 p-8 rounded-3xl text-center">
                <div className="text-emerald-400 inline-flex mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="text-slate-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Latest Listings */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm bg-emerald-50 px-4 py-1.5 rounded-full inline-block">Explore</span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950">Latest Property Listings</h2>
              </div>
              {/* Desktop View All Link */}
              <Link to="/buy" className="hidden sm:inline-block font-semibold text-emerald-600 hover:text-emerald-500">View All Properties &rarr;</Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {latestProjects.map((property) => (
                <div key={property.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
                  <div className="h-56 overflow-hidden relative">
                    <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                    <span className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md">{property.category}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950 mb-2">{property.name}</h3>
                      <p className="text-slate-500 text-sm mb-4">{property.location}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-emerald-600 font-bold text-lg">৳ {property.price}</span>
                      <Link to={`/property/${property.id}`} className="bg-slate-950 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-600 transition">View Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center sm:hidden">
              <Link
                to="/buy"
                className="inline-block w-full rounded-full bg-slate-950 py-4 text-center font-semibold text-white transition hover:bg-emerald-600 shadow-md"
              >
                View All Properties &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* about section */}
        <AboutSection />

        {/* 7. FAQ */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm bg-emerald-50 px-4 py-1.5 rounded-full inline-block">Support</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-950">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {faqData.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100">
                  <h3 className="font-bold text-lg text-slate-950 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Call To Action */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="mx-auto max-w-5xl bg-slate-900 rounded-[3rem] p-12 text-center text-white shadow-xl">
            <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="mt-4 text-slate-400">Join 200+ happy clients who trusted us with their property decisions.</p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* Get Started Button */}
              <Link
                to="/buy"
                className="inline-block bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-emerald-400 transition shadow-lg"
              >
                Get Started
              </Link>

              {/* Contact Us Button */}
              <Link
                to="/contact"
                className="inline-block border border-white/20 bg-white/10 px-8 py-3.5 rounded-full font-bold text-white backdrop-blur-md hover:bg-white hover:text-slate-900 transition shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;