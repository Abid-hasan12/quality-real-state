import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Navbar />

            {/* About Section Content */}
            <section className="py-32 overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 h-[400px]">
                            <img
                                src="./images/logo.png"
                                alt="About Company"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="space-y-6">
                            <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm bg-emerald-50 px-4 py-1.5 rounded-full inline-block">
                                About Company
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                                Building Trust, Creating Dreams – Welcome to <span className="text-blue-700">Quality Real Estate</span>
                            </h1>
                            <h3 className="text-black font-bold text-lg">Who We Are:</h3>
                            <p className="text-slate-800 leading-relaxed text-base">
                                Welcome to <span className="font-bold">Quality Real Estate</span>, your trusted partner in finding the perfect property in Dhaka. Whether you are looking for a luxurious flat, a modern house, a secure plot, commercial land, or reliable property shares, we are committed to delivering excellence at every step. We don't just sell properties; we build lasting relationships based on transparency, trust, and exceptional customer service.
                            </p>
                            <h3 className="text-black font-bold text-lg">Our Mission:</h3>
                            <p className="text-slate-800 leading-relaxed text-base">
                                <span className="font-bold">Uncompromised Quality:</span> Providing meticulously designed and structurally sound properties in prime locations (such as Dhanmondi, Banasree, and across Dhaka). <br />

                                <span className="font-bold">Customer-Centric Approach:</span> Prioritizing our clients' unique needs and guiding them seamlessly from property selection to a hassle-free booking experience. <br />

                                <span className="font-bold">Uncompromised Quality:</span> Maintaining absolute clarity and honesty in every deal, ensuring peace of mind for buyers and investors.
                            </p>
                            <h3 className="text-black font-bold text-lg">Why Choose Us?</h3>
                            <p className="text-slate-800 leading-relaxed text-base">
                                <span className="font-bold">Prime Locations:</span> Properties situated in the most sought-after and convenient neighborhoods. <br />


                                <span className="font-bold">Diverse Portfolio:</span> From cozy flats to expansive plots and shared property options, we have something for every budget and requirement. <br />

                                <span className="font-bold">Expert Guidance:</span> A dedicated team ready to assist you at every stage, including direct communication and easy visit scheduling through modern platforms.
                            </p>
                            <p className='font-bold'>Discover your dream property with us today, because your quality of living is our ultimate commitment.</p>
                            <Link
                                to="/buy"
                                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-emerald-600 shadow-md"
                            >
                                Explore Properties
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;