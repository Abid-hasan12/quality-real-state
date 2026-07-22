import { useParams } from 'react-router-dom';
import { projects } from '../data/data';
import PropertyCard from '../components/PropertyCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CategoryPage = () => {
    const { categoryName } = useParams(); // URL থেকে ক্যাটাগরি নাম ধরবে (flat, house, ইত্যাদি)

    // data.js থেকে ক্যাটাগরি অনুযায়ী ফিল্টার করা
    // (ধরে নিচ্ছি আপনার data.js-এ প্রজেক্টগুলোতে category বা type প্রপার্টি আছে)
    const filteredProperties = projects.filter(
        (item) => item.category?.toLowerCase() === categoryName?.toLowerCase()
    );

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold capitalize text-slate-900 mb-8">
                    {categoryName} Properties
                </h1>

                {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                ) : (
                    <p className="text-slate-600 text-lg">No properties found in this category.</p>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default CategoryPage;