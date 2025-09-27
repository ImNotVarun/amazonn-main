import React from 'react';

interface CategoryCard {
  title: string;
  items: Array<{
    name: string;
    image: string;
  }>;
}

const categories: CategoryCard[] = [
  {
    title: "Shop Fashion for less",
    items: [
      { name: "Jeans under $50", image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Tops under $25", image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Dresses under $30", image: "https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Shoes under $50", image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300" }
    ]
  },
  {
    title: "Shop for your home essentials",
    items: [
      { name: "Cleaning Tools", image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Home Storage", image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Home Decor", image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Bedding", image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=300" }
    ]
  },
  {
    title: "Get your game on",
    items: [
      { name: "Keyboards", image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Computer mice", image: "https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Headsets", image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Chairs", image: "https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=300" }
    ]
  },
  {
    title: "Kitchen essentials",
    items: [
      { name: "Cookware", image: "https://images.pexels.com/photos/4113942/pexels-photo-4113942.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Kitchen tools", image: "https://images.pexels.com/photos/4254552/pexels-photo-4254552.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Dining", image: "https://images.pexels.com/photos/1321942/pexels-photo-1321942.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Storage & organization", image: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=300" }
    ]
  }
];

export function ProductCategories() {
  return (
    <div className="max-w-[1500px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-lg mb-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm text-gray-700 group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-4 text-cyan-600 hover:text-cyan-800 text-sm font-medium hover:underline">
              See more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}