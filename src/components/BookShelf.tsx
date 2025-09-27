import React from 'react';

interface Book {
  title: string;
  price: number;
  image: string;
  bgColor?: string;
}

export function BookShelf() {
  const books: Book[] = [
    {
      title: "The Great Gatsby",
      price: 299,
      image: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
      bgColor: "bg-yellow-50",
    },
    {
      title: "1984",
      price: 249,
      image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
      bgColor: "bg-blue-50",
    },
    {
      title: "To Kill a Mockingbird",
      price: 349,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81nyt-VZ33L._SL1500_.jpg&f=1&nofb=1&ipt=f1145251a62d120fb198131524067e55d3c05d93b0d03fd6e152017fea8ec3c5",
      bgColor: "bg-green-50",
    },
    {
      title: "Sapiens",
      price: 399,
      image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
      bgColor: "bg-pink-50",
    },
    // Add more books here
  ];

  return (
    <div className="max-w-[1500px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Books</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book, index) => (
          <div
            key={index}
            className={`${book.bgColor} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group`}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                {book.title}
              </h3>
              <p className="text-sm font-bold text-red-600">₹{book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
