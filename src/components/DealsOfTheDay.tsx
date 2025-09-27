import React, { useEffect, useState } from "react";

interface Deal {
  title: string;
  image: string;
  price: number;
  oldPrice: number;
}

export function DealsOfTheDay() {
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  // Countdown target: 6 hours from now
  useEffect(() => {
    const target = new Date().getTime() + 6 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft("Expired");
      } else {
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        setTimeLeft(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const deals: Deal[] = [
    {
      title: "Wireless Headphones",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.FCB33TXqP_3eepbjjans_AHaHa%3Fpid%3DApi&f=1&ipt=abad273f51eb0c342d5cf47d5b734b017d21386b366968abedec6892c3aec083&ipo=images",
      price: 1999,
      oldPrice: 3999,
    },
    {
      title: "Smartwatch Pro",
      image: "https://www.bhphotovideo.com/images/images2500x2500/apple_mj3t2ll_a_watch_sport_smartwatch_42mm_1187199.jpg",
      price: 4999,
      oldPrice: 8999,
    },
    {
      title: "Gaming Mouse",
      image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1500_.jpg",
      price: 1499,
      oldPrice: 2999,
    },
  ];

  return (
    <div className="max-w-[1500px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">🔥 Deals of the Day</h2>
        <p className="text-lg font-semibold text-red-600">
          Deal ends in {timeLeft}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-[60%] h-48 object-cover group-hover:scale-105 transition-transform duration-500 mx-auto"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">
                {deal.title}
              </h3>
              <div className="flex items-center justify-center gap-2">
                <p className="text-lg font-bold text-red-600">₹{deal.price}</p>
                <p className="text-sm line-through text-gray-500">
                  ₹{deal.oldPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
