import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    const imageSource = property.image || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750";

    return (
        // 1. এখানে flex flex-col h-full যোগ করা হয়েছে যেন কার্ডের হাইট সবসময় সমান থাকে
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white group flex flex-col h-full">

            <div className="overflow-hidden">
                <img
                    src={imageSource}
                    alt={property.name}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* 2. এখানে flex flex-col flex-grow যোগ করা হয়েছে যেন এটি কন্টেন্টের জায়গা নেয় */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                    <p className="text-emerald-600 font-bold text-xs uppercase tracking-wider">{property.location}</p>
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-1 rounded-md font-medium">{property.category}</span>
                </div>

                <h3 className="font-bold text-xl mt-2 text-slate-800">{property.name}</h3>

                {/* 3. এই প্যারাগ্রাফে flex-grow যোগ করা হয়েছে যাতে এটি বাটনকে ঠেলে নিচে নামিয়ে দেয় */}
                <p className="text-slate-500 text-sm mt-2 line-clamp-2 leading-relaxed flex-grow">
                    {property.description}
                </p>

                {/* 4. বাটন এবং প্রাইস সেকশনটি সবসময় নিচে থাকার জন্য mt-auto বা flex-shrink-0 ব্যবহার করা হয়েছে */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-lg text-emerald-700">{property.price}</span>
                        <span className="text-sm text-slate-400 font-medium">{property.size}</span>
                    </div>

                    <Link
                        to={`/property/${property.id}`}
                        className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition duration-300"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;