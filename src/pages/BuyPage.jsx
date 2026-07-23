import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { filterData, projects } from '../data/data';

const parseAmount = (value) => {
    if (typeof value === 'number') {
        return value;
    }

    const parsed = Number(String(value).replace(/[^0-9.-]/g, ''));
    return Number.isFinite(parsed) ? parsed : NaN;
};

const parseCurrencyAmount = (value) => {
    const normalizedValue = String(value).toLowerCase().replace(/,/g, '');
    const amount = parseAmount(normalizedValue);

    if (normalizedValue.includes('crore')) {
        return amount * 10000000;
    }

    if (normalizedValue.includes('lac')) {
        return amount * 100000;
    }

    return amount;
};

const parseRangeLabel = (label, parser) => {
    const normalizedLabel = String(label).toLowerCase();

    if (normalizedLabel.includes('+')) {
        return { min: parser(label), max: Infinity };
    }

    const [minLabel, maxLabel] = String(label).split('-').map((part) => part.trim());
    return {
        min: parser(minLabel),
        max: parser(maxLabel),
    };
};

const formatOptions = (items, toValue) => items.map((item) => ({ label: item, value: toValue ? toValue(item) : item }));

const BuyPage = () => {
    const [filters, setFilters] = useState({ project: null, location: null, price: null, size: null });
    const [showMore, setShowMore] = useState(false);

    const projectOptions = formatOptions(filterData.projects);
    const locationOptions = formatOptions(filterData.locations);
    const priceOptions = filterData.priceRanges.map((range) => ({
        label: range,
        value: parseRangeLabel(range, parseCurrencyAmount),
    }));
    const sizeOptions = filterData.sizes.map((range) => ({
        label: range,
        value: parseRangeLabel(range, parseAmount),
    }));

    const customStyles = {
        control: (provided) => ({ ...provided, padding: '5px', borderRadius: '8px', borderColor: '#e2e8f0' }),
    };

    const filteredProjects = useMemo(() => {
        return [...projects].reverse().filter(p => {
            const matchProject = !filters.project || p.category === filters.project.value;
            const matchLocation = !filters.location || p.location === filters.location.value;

            const projectPrice = parseAmount(p.price);
            const projectSize = parseAmount(p.size);
            const matchPrice = !filters.price || (Number.isFinite(projectPrice) && projectPrice >= filters.price.value.min && projectPrice <= filters.price.value.max);
            const matchSize = !filters.size || (Number.isFinite(projectSize) && projectSize >= filters.size.value.min && projectSize <= filters.size.value.max);

            return matchProject && matchLocation && matchPrice && matchSize;
        });
    }, [filters]);

    const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <div>
            <Navbar />
            <main className="container mx-auto p-8 py-20 mt-10 min-h-screen">
                <h2 className="text-3xl font-bold mb-6">Find Your Property</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    <Select options={projectOptions} placeholder="Select Project" isSearchable isClearable styles={customStyles} onChange={(option) => setFilters((current) => ({ ...current, project: option }))} />
                    <Select options={locationOptions} placeholder="Select Location" isSearchable isClearable styles={customStyles} onChange={(option) => setFilters((current) => ({ ...current, location: option }))} />
                    <Select options={priceOptions} placeholder="Price Range" isSearchable isClearable styles={customStyles} onChange={(option) => setFilters((current) => ({ ...current, price: option }))} />
                    <Select options={sizeOptions} placeholder="Property Size" isSearchable isClearable styles={customStyles} onChange={(option) => setFilters((current) => ({ ...current, size: option }))} />
                </div>

                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedProjects.map(p => (
                            <PropertyCard key={p.id} property={p} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-10">No properties found matching your criteria.</p>
                )}

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