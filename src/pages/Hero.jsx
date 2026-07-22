import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Main Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
                    style={{
                        backgroundImage: "url('./images/herosmbg.png')", 
                    }}
                />
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('./images/herobg.png')",
                    }}
                />
                <div className="absolute inset-0 bg-[#07182D]/60" />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#07182D]/80 via-[#07182D]/50 to-[#0F766E]/20" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Radial Glow */}
                <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl"
                >
                    Building Future
                    <br />
                    <span className="text-emerald-400">Living Spaces</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300"
                >
                    Quality Real Estate connects serious buyers and sellers with a professional, high-conversion property experience.
                </motion.p>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
                >
                    <Link
                        to="/buy"
                        className="rounded-full bg-emerald-500 px-10 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-emerald-400"
                    >
                        Buy Properties
                    </Link>

                    <Link
                        to="/list-property"
                        className="rounded-full border border-white/20 bg-white/10 px-10 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-slate-900"
                    >
                        List Your Property
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;