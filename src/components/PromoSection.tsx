import React from 'react';

export function PromoSection() {
  const promoItems = [
    {
      title: "Electronics",
      subtitle: "Up to 70% off",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-blue-50"
    },
    {
      title: "Fashion",
      subtitle: "Under $50",
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-pink-50"
    },
    {
      title: "Home & Garden",
      subtitle: "Best sellers",
      image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-green-50"
    },
    {
      title: "Books",
      subtitle: "New releases",
      image: "https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=400",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <div className="max-w-[1500px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {promoItems.map((item, index) => (
          <div 
            key={index} 
            className={`${item.bgColor} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group`}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}