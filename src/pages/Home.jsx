import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// আপনার স্ট্যাটস এবং সোশ্যাল লিঙ্কগুলো একই থাকবে...
const successStats = [
  { value: '500+', label: 'Properties Sold', icon: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 10.5 12 4l8 6.5" /><path d="M6.5 9.5V20h11V9.5" /><path d="M10 20v-5h4v5" /></svg> },
  { value: '200+', label: 'Happy Clients', icon: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16.5 19a4.5 4.5 0 0 0-9 0" /><circle cx="12" cy="8" r="3.5" /><path d="M18.5 19a3.8 3.8 0 0 0-2.3-3.2" /><path d="M16 4.8a3.5 3.5 0 0 1 0 6.9" /></svg> },
  { value: '15+', label: 'Years of Experience', icon: <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 7v5l3 2" /><circle cx="12" cy="12" r="8.5" /></svg> },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <main>
        {/* Hero Section with 3D Background */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image - এখানে আপনার ৩ডি ইমেজের লিঙ্ক বসান */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
            >
              Building Future <br /> <span className="text-emerald-400">Living Spaces</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 max-w-2xl mx-auto text-lg text-slate-200"
            >
              Quality Real Estate connects serious buyers and sellers with a professional, high-conversion property experience.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-col gap-4 justify-center sm:flex-row"
            >
              <Link to="/buy" className="rounded-full bg-emerald-500 px-10 py-4 font-semibold text-white hover:bg-emerald-400 transition shadow-lg">Explore Properties</Link>
              <Link to="/list-property" className="rounded-full border border-white/30 bg-white/10 px-10 py-4 font-semibold text-white hover:bg-white hover:text-slate-900 transition">List Your Property</Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
            {successStats.map((stat, idx) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="text-emerald-500 mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="text-slate-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="mx-auto max-w-5xl bg-slate-900 rounded-[3rem] p-12 text-center text-white">
            <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="mt-4 text-slate-400">Join 200+ happy clients who trusted us with their property decisions.</p>
            <div className="mt-8">
              <Link to="/buy" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition">Get Started</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;