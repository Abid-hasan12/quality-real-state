import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = projects.find((p) => p.id === parseInt(id));

  // Lightbox State
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!property) return <Navigate to="/buy" />;

  // moreDetails থেকে ডাটা destructure করে নেওয়া
  const { moreDetails } = property;

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-8 mt-10 min-h-screen">
        {/* উপরের তথ্য সেকশন */}
        <div className="mb-8">
          <p className="text-emerald-600 font-bold text-lg">{moreDetails.FullLocation}</p>
          <div className="flex gap-10 mt-2">
            <div className="border-t pt-2 w-1/4">
              <p className="text-slate-400 text-sm">Price</p>
              <p className="font-bold text-2xl">{property.price}</p>
            </div>
            <div className="border-t pt-2 w-2/4">
              <p className="text-slate-400 text-sm">Size</p>
              <p className="font-bold text-2xl">{property.size}</p>
            </div>
          </div>
        </div>

        {/* ফুল ডিটেইলস - এখানে moreDetails থেকে ডাটা নেওয়া হয়েছে */}
        <div className="bg-slate-50 p-2 rounded-3xl mb-10">
          <h2 className="text-xl font-bold mb-4">Details:</h2>
          <p className="text-black leading-relaxed">
            {moreDetails?.FullDetails || property.description}
          </p>
        </div>

        {/* ইমেজ গ্রিড সেকশন - galleryImages থেকে ম্যাপ করা হয়েছে */}
        {moreDetails?.galleryImages && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Images Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {moreDetails.galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className="cursor-pointer rounded-xl h-40 w-full object-cover hover:opacity-80 transition"
                  onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                />
              ))}
            </div>
          </div>
        )}

        {/* ভিডিও সেকশন */}
        {moreDetails?.videoUrl && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Property Video</h2>
            <div className="aspect-video w-full md:w-2/3">
              <iframe
                className="w-full h-full rounded-2xl"
                src={moreDetails.videoUrl}
                title="Property Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </main>

      {/* Lightbox Component */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={moreDetails.galleryImages.map((img) => ({ src: img }))}
          index={photoIndex}
          on={{
            view: ({ index }) => setPhotoIndex(index),
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default PropertyDetails;