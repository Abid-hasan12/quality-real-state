import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <Link
      to={`/property/${property.id}`}
      aria-label={`View details for ${property.title}`}
      className="group block focus:outline-none"
    >
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-xl"
      >
        <img
          src={property.image}
          alt={property.title}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="space-y-3 p-5">
          <h3 className="text-xl font-semibold text-slate-900">{property.title}</h3>
          <p className="text-sm text-slate-500">{property.location}</p>
          <p className="text-lg font-bold text-emerald-600">{property.price}</p>

          <div className="w-full rounded-lg bg-emerald-500 py-2 text-center font-medium text-white transition-colors group-hover:bg-emerald-600">
            View Details
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default PropertyCard;