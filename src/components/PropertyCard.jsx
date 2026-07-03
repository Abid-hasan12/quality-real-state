import React from 'react';
import { Link } from 'react-router-dom'; // ১. Link ইমপোর্ট করলাম

const PropertyCard = ({ property }) => {
  return (
    // ২. পুরো কার্ডটিকে একটি Link দিয়ে মুড়ে দিলাম যেন পুরো কার্ডে ক্লিক করা যায়
    <Link
      to={`/property/${property.id}`}
      className="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={property.image}
        alt={property.title}
        className="h-56 w-full object-cover"
      />
      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{property.title}</h3>
          <p className="text-sm text-slate-500">{property.location}</p>
        </div>
        <p className="text-sm leading-6 text-slate-600 line-clamp-2">
          {property.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-emerald-600">{property.price}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-600">
            {property.type}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;