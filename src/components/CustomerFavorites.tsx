import React from "react";
import { Star } from "lucide-react";

interface Favorite {
  title: string;
  image: string;
  price: number;
  rating: number; // 1–5
}

export function CustomerFavorites() {
  const favorites: Favorite[] = [
    {
      title: "Noise Cancelling Headphones",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.FCB33TXqP_3eepbjjans_AHaHa%3Fpid%3DApi&f=1&ipt=abad273f51eb0c342d5cf47d5b734b017d21386b366968abedec6892c3aec083&ipo=images",
      price: 7999,
      rating: 5,
    },
    {
      title: "4K Smart TV",
      image: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2025/05/samsung-s85d-55-inch-oled-smart-tv-on-the-wall.jpg",
      price: 24999,
      rating: 4,
    },
    {
      title: "Portable Speaker",
      image: "https://m.media-amazon.com/images/I/713TUYjagQL.jpg",
      price: 2999,
      rating: 4,
    },
    {
      title: "Fitness Tracker",
      image: "https://www.ahealthiermichigan.org/wp-content/uploads/2014/07/Latest-fitness-trackers.jpg",
      price: 1999,
      rating: 3,
    },
  ];

  return (
    <div className="max-w-[1500px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        ⭐ Customer Favorites
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {favorites.map((fav, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <img
              src={fav.image}
              alt={fav.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">{fav.title}</h3>
              <p className="font-bold text-red-600 mb-2">₹{fav.price}</p>
              <div className="flex justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < fav.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
