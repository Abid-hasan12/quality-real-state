import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="block transition-transform duration-300 hover:scale-105">
      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl">
        <img
          src={property.image}
          alt={property.title}
          className="h-56 w-full object-cover"
        />
        <div className="space-y-3 p-5">
          <h3 className="text-xl font-semibold text-slate-900">{property.title}</h3>
          <p className="text-sm text-slate-500">{property.location}</p>
          <p className="text-lg font-bold text-emerald-600">{property.price}</p>

          {/* বাটনটি এখন শুধুমাত্র একটি ভিজ্যুয়াল এলিমেন্ট হিসেবে কাজ করবে */}
          <div className="w-full text-center py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600">
            View Details
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PropertyCard;;