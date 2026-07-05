import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard'; // কার্ড কম্পোনেন্ট ইমপোর্ট করো
import { filterData, projects } from '../data/data';

const BuyPage = () => {
    const [filters, setFilters] = useState({ project: null, location: null, price: null, size: null });
    const [showMore, setShowMore] = useState(false);

    const projectOptions = filterData.projects.map(p => ({ value: p, label: p }));
    const locationOptions = filterData.locations.map(l => ({ value: l, label: l }));
    const priceOptions = filterData.priceRanges.map(p => ({ value: p, label: p }));
    const sizeOptions = filterData.sizes.map(s => ({ value: s, label: s }));

    const customStyles = {
        control: (provided) => ({ ...provided, padding: '5px', borderRadius: '8px', borderColor: '#e2e8f0' }),
    };

    // ফিল্টারিং লজিক - নতুন ডাটা শুরুতে দেখানোর জন্য
    const filteredProjects = useMemo(() => {
        // [...projects] দিয়ে অরিজিনাল ডাটা ঠিক রেখে একটি কপি তৈরি করা হয়েছে
        // .reverse() নতুন প্রজেক্টগুলোকে শুরুতে নিয়ে আসবে
        return [...projects].reverse().filter(p => {
            return (!filters.project || p.category === filters.project.value) &&
                (!filters.location || p.location === filters.location.value) &&
                (!filters.price || p.price === filters.price.value) &&
                (!filters.size || p.size === filters.size.value);
        });
    }, [filters]);

    const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-8 mt-10 min-h-screen">
                <h2 className="text-3xl font-bold mb-6">Find Your Property</h2>

                {/* সার্চ ফিল্টার */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    <Select options={projectOptions} placeholder="Select Project" isSearchable isClearable styles={customStyles} onChange={(e) => setFilters({ ...filters, project: e })} />
                    <Select options={locationOptions} placeholder="Select Location" isSearchable isClearable styles={customStyles} onChange={(e) => setFilters({ ...filters, location: e })} />
                    <Select options={priceOptions} placeholder="Price Range" isSearchable isClearable styles={customStyles} onChange={(e) => setFilters({ ...filters, price: e })} />
                    <Select options={sizeOptions} placeholder="Property Size" isSearchable isClearable styles={customStyles} onChange={(e) => setFilters({ ...filters, size: e })} />
                </div>

                {/* প্রজেক্ট গ্রিড - এখানে নতুন কার্ড কম্পোনেন্ট ব্যবহার করা হয়েছে */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedProjects.map(p => (
                            <PropertyCard key={p.id} property={p} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-10">No properties found matching your criteria.</p>
                )}

                {/* More বাটন */}
                {filteredProjects.length > 6 && (
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="mt-12 bg-emerald-600 text-white px-10 py-3 rounded-full mx-auto block hover:bg-emerald-700 transition duration-300"
                    >
                        {showMore ? "Show Less" : "More Projects"}
                    </button>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default BuyPage;