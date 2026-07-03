import React from 'react';
import { Link } from 'react-router-dom';

const ListProperty = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-xl rounded-2xl bg-white p-8 shadow-sm border border-slate-200 text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">List Your Property</h1>
        <p className="text-slate-600">A listing form will be added here.</p>
        <Link to="/" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-white font-medium">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ListProperty;