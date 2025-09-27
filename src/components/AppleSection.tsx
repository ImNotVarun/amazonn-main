import React from 'react';

interface Product {
  title: string;
  subtitle?: string;
  image: string;
  bgColor?: string;
}

export function AppleSection() {
  const products: Product[] = [
    {
      title: "iPhone 15",
      subtitle: "Pro & Pro Max",
      image: "https://s13emagst.akamaized.net/products/60458/60457155/images/res_bc44fa0bbdf0de65a3c655809352aba9.jpg",
      bgColor: "bg-gray-50",
    },
    {
      title: "iPhone 15 Plus",
      subtitle: "All new colors",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-family-hero-202309?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1695056362542",
      bgColor: "bg-gray-50",
    },
    {
      title: "iPad Pro",
      subtitle: "M2 Chip",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.idownloadblog.com%2Fwp-content%2Fuploads%2F2021%2F09%2FApple-iPhone-13-Pro-advertisement.jpg&f=1&nofb=1&ipt=897a84ed064f2467b9e3b0e0a303c771e532e833da347fb5338ed036c29fe0d1",
      bgColor: "bg-blue-50",
    },
    {
      title: "iPad Air",
      subtitle: "Light & powerful",
      image: "https://m.media-amazon.com/images/G/02/Apple/CompCharts/10th_gen._CB606154559_.jpg",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="max-w-[1500px] mx-auto px-4 py-8">
      {/* Banner */}
      <div className="relative rounded-lg overflow-hidden mb-8">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fmax_1200%2Ff3832e180145769.6505ae76214ca.jpg&f=1&nofb=1&ipt=6c26503c87a7e518d28c9b75b7e16954ff9b2a405e19d8fdeabda447e731118e"
          alt="iPhone Banner"
          className="w-full h-64 object-cover md:h-96"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold">iPhone 17</h2>
          <p className="mt-2 md:text-lg">Pro & Pro Max</p>
        </div>
      </div>

      {/* Products grid */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">iPhones & iPads</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className={`${product.bgColor} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group`}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                {product.title}
              </h3>
              {product.subtitle && (
                <p className="text-sm text-gray-600">{product.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
