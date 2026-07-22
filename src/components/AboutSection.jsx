import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                            Crafting spaces, building trust, and shaping your future.
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-base">
                            At Quality Real Estate, we believe finding a property should be an experience built on transparency, reliability, and expert guidance.
                        </p>
                        <Link
                            to="/buy"
                            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-emerald-600 shadow-md"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;