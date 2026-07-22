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

  // বুকিং ফর্মের জন্য স্টেট
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!property) return <Navigate to="/buy" />;

  const { moreDetails } = property;
  const galleryImages = (moreDetails?.galleryImages ?? []).map(getAssetUrl);
  const videoUrl = getVideoEmbedUrl(moreDetails?.videoUrl);

  // ইনপুট পরিবর্তনের হ্যান্ডলার
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // হোয়াটসঅ্যাপে বুকিং পাঠানোর হ্যান্ডলার
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // আপনার অ্যাডমিন হোয়াটসঅ্যাপ নম্বর (কান্ট্রি কোড সহ)
    const adminWhatsAppNumber = "8801805030165";

    // হোয়াটসঅ্যাপ মেসেজ ফরম্যাট (যেখানে প্রপার্টির নাম, প্রাইস, সাইজ এবং লোকেশন অটোমেটিক যাবে)
    const message = `*New Property Visit Booking!*%0A
🏠 *Property:* ${property.name}%0A
📍 *Location:* ${moreDetails?.FullLocation}%0A
💰 *Price:* ${formatPrice(property.price)}%0A
📐 *Size:* ${formatSize(property.size)}%0A
-------------------%0A
👤 *Name:* ${formData.name}%0A
📞 *Phone:* ${formData.phone}%0A
📅 *Date:* ${formData.date}%0A
⏰ *Time:* ${formData.time}`;

    const whatsappUrl = `https://wa.me/${adminWhatsAppNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

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

        {/* Schedule a Visit Section (Footer এর ঠিক আগে) */}
        <section className="bg-slate-900 py-16 px-4 rounded-3xl max-w-5xl mx-auto my-16 text-white">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-emerald-400 font-semibold uppercase tracking-wider text-sm bg-slate-800 px-4 py-1.5 rounded-full inline-block mb-3">
              Book a Visit
            </span>
            <h2 className="text-3xl font-bold">Schedule a Property Visit</h2>
            <p className="text-slate-400 mt-2">Fill up the form below to book your visiting slot for {property.name}.</p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-600/20 border border-emerald-500 text-emerald-300 p-6 rounded-2xl text-center max-w-lg mx-auto">
              <p>Thank you, {formData.name}. Your booking details for {property.name} have been prepared to send.</p>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="01XXXXXXXXX"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Date</label>
                  <input
                    type="text"
                    name="date"
                    required
                    placeholder="DD/MM/YYYY or e.g., Tomorrow"
                    value={formData.date}
                    onChange={handleInputChange}
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Time</label>
                  <input
                    type="text"
                    name="time"
                    required
                    placeholder="e.g., 03:30 PM"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 transition text-white font-semibold py-4 rounded-xl shadow-lg mt-4"
              >
                Book via WhatsApp
              </button>
            </form>
          )}
        </section>
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