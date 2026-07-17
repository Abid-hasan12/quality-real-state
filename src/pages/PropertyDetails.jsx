import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const formatPrice = (price) => {
  const numericPrice = typeof price === 'number' ? price : Number(String(price).replace(/[^0-9.-]/g, ''));
  if (Number.isFinite(numericPrice)) {
    return numericPrice >= 10000000 ? `${(numericPrice / 10000000).toFixed(1)} Crore` : `${(numericPrice / 100000).toFixed(0)} Lac`;
  }
  return price;
};

const formatSize = (size) => {
  const numericSize = typeof size === 'number' ? size : Number(String(size).replace(/[^0-9.-]/g, ''));
  return Number.isFinite(numericSize) ? `${numericSize} sqft` : size;
};

const getAssetUrl = (path) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};

const getVideoEmbedUrl = (url) => {
  if (!url) return '';

  if (url.includes('/shorts/')) {
    return url.replace('/shorts/', '/embed/');
  }

  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split(/[?&]/)[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }

  return url;
};

const PropertyDetails = () => {
  const { id } = useParams();
  const property = projects.find((p) => p.id === parseInt(id));

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!property) return <Navigate to="/buy" />;

  const { moreDetails } = property;
  const galleryImages = (moreDetails?.galleryImages ?? []).map(getAssetUrl);
  const videoUrl = getVideoEmbedUrl(moreDetails?.videoUrl);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-8 mt-10 min-h-screen">
        <div className="mb-8">
          <p className="text-emerald-600 font-bold text-lg">{moreDetails.FullLocation}</p>
          <div className="flex gap-10 mt-2">
            <div className="border-t pt-2 w-1/4">
              <p className="text-slate-400 text-sm">Price</p>
              <p className="font-bold text-2xl">{formatPrice(property.price)}</p>
            </div>
            <div className="border-t pt-2 w-2/4">
              <p className="text-slate-400 text-sm">Size</p>
              <p className="font-bold text-2xl">{formatSize(property.size)}</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-2 rounded-3xl mb-10">
          <h2 className="text-xl font-bold mb-4">Details:</h2>
          <p className="text-black leading-relaxed whitespace-pre-line">{moreDetails?.FullDetails}</p>
        </div>

        {galleryImages.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Images Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${property.name} gallery image ${index + 1}`}
                  className="cursor-pointer rounded-xl h-40 w-full object-cover hover:opacity-80 transition"
                  onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                />
              ))}
            </div>
          </div>
        )}

        {videoUrl && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Property Video</h2>
            <div className="aspect-video w-full md:w-2/3">
              <iframe
                className="w-full h-full rounded-2xl"
                src={videoUrl}
                title="Property Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </main>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={galleryImages.map((img) => ({ src: img }))}
          index={photoIndex}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
        />
      )}
      <Footer />
    </div>
  );
};

export default PropertyDetails;