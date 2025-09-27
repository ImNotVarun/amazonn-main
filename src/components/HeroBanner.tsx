import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Banner {
  id: number;
  title: string;
  subtitle?: string;
  background: string;
  textColor: string;
  decorativeElements: React.ReactNode;
}

export function HeroBanner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners: Banner[] = [
    {
      id: 1,
      title: "Toys for little ones",
      background: "bg-gradient-to-r from-green-200 via-blue-200 to-purple-200",
      textColor: "text-gray-800",
      decorativeElements: (
        <>
          <div className="flex space-x-8">
            <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center transform -rotate-12">
              <div className="w-4 h-4 bg-black rounded-full mb-8"></div>
              <div className="w-4 h-4 bg-black rounded-full mb-8 ml-4"></div>
            </div>
            <div className="w-24 h-24 bg-green-500 rounded-lg transform rotate-12"></div>
          </div>
          <div className="flex space-x-8">
            <div className="w-28 h-28 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full"></div>
            </div>
            <div className="w-24 h-24 bg-blue-500 rounded-full"></div>
            <div className="w-32 h-32 bg-green-600 rounded-lg transform rotate-45 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 2,
      title: "Electronics Sale",
      subtitle: "Up to 70% off",
      background: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700",
      textColor: "text-white",
      decorativeElements: (
        <>
          <div className="flex space-x-6">
            <div className="w-28 h-28 bg-white bg-opacity-20 rounded-lg transform -rotate-12 flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-400 rounded"></div>
            </div>
            <div className="w-32 h-32 bg-white bg-opacity-15 rounded-full flex items-center justify-center">
              <div className="w-20 h-20 bg-purple-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="w-24 h-24 bg-white bg-opacity-25 rounded-lg transform rotate-45"></div>
            <div className="w-36 h-36 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-indigo-400 rounded-lg transform -rotate-12"></div>
            </div>
            <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full"></div>
          </div>
        </>
      )
    },
    {
      id: 3,
      title: "Fashion Week",
      subtitle: "New arrivals daily",
      background: "bg-gradient-to-r from-pink-400 via-rose-400 to-red-400",
      textColor: "text-white",
      decorativeElements: (
        <>
          <div className="flex space-x-8">
            <div className="w-28 h-28 bg-white bg-opacity-25 rounded-full transform -rotate-12"></div>
            <div className="w-24 h-32 bg-white bg-opacity-20 rounded-lg transform rotate-12"></div>
            <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full"></div>
          </div>
          <div className="flex space-x-6">
            <div className="w-32 h-32 bg-white bg-opacity-15 rounded-lg transform rotate-45 flex items-center justify-center">
              <div className="w-16 h-16 bg-pink-300 rounded-full"></div>
            </div>
            <div className="w-24 h-24 bg-white bg-opacity-25 rounded-full"></div>
            <div className="w-28 h-28 bg-white bg-opacity-20 rounded-lg transform -rotate-12"></div>
          </div>
        </>
      )
    },
    {
      id: 4,
      title: "Home & Garden",
      subtitle: "Transform your space",
      background: "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600",
      textColor: "text-white",
      decorativeElements: (
        <>
          <div className="flex space-x-6">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-lg transform -rotate-12 flex items-center justify-center">
              <div className="w-20 h-20 bg-green-300 rounded-lg"></div>
            </div>
            <div className="w-24 h-24 bg-white bg-opacity-25 rounded-full"></div>
          </div>
          <div className="flex space-x-8">
            <div className="w-28 h-28 bg-white bg-opacity-15 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-emerald-300 rounded-full"></div>
            </div>
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-lg transform rotate-45"></div>
            <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full"></div>
          </div>
        </>
      )
    },
    {
      id: 5,
      title: "Gaming Zone",
      subtitle: "Level up your setup",
      background: "bg-gradient-to-r from-gray-800 via-gray-900 to-black",
      textColor: "text-white",
      decorativeElements: (
        <>
          <div className="flex space-x-6">
            <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg transform -rotate-12"></div>
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"></div>
          </div>
          <div className="flex space-x-8">
            <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full"></div>
            </div>
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg transform rotate-45"></div>
            <div className="w-28 h-28 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full"></div>
          </div>
        </>
      )
    }
  ];

  // Auto-rotate banners every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [banners.length]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToBanner = (index: number) => {
    setCurrentBanner(index);
  };

  const currentBannerData = banners[currentBanner];

  return (
    <div className={`relative ${currentBannerData.background} h-96 overflow-hidden transition-all duration-1000`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 flex items-center justify-between px-20">
        {currentBannerData.decorativeElements}
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <h1 className={`text-5xl md:text-6xl font-bold ${currentBannerData.textColor} mb-4 transition-all duration-500`}>
            {currentBannerData.title}
          </h1>
          {currentBannerData.subtitle && (
            <p className={`text-xl md:text-2xl ${currentBannerData.textColor} opacity-90`}>
              {currentBannerData.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all z-20"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all z-20"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentBanner
              ? 'bg-white scale-125'
              : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{
            width: `${((currentBanner + 1) / banners.length) * 100}%`,
            animation: 'progress 5s linear infinite'
          }}
        />
      </div>


    </div>
  );
}