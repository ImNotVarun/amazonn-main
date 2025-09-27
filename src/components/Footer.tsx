import React from 'react';

export function Footer() {
  const footerSections = [
    {
      title: "Get to Know Us",
      links: ["About Us", "Careers", "Press Releases", "Amazon Cares", "Gift a Smile"]
    },
    {
      title: "Connect with Us",
      links: ["Facebook", "Twitter", "Instagram", "YouTube"]
    },
    {
      title: "Make Money with Us",
      links: ["Sell on Amazon", "Advertise Your Products", "Amazon Pay", "Become an Affiliate"]
    },
    {
      title: "Let Us Help You",
      links: ["Your Orders", "Returns Centre", "100% Purchase Protection", "Amazon App Download", "Amazon Assistant Download", "Help"]
    }
  ];

  return (
    <footer className="bg-[#232F3E] text-white">
      {/* Back to top */}
      <div className="bg-[#37475A] hover:bg-[#485769] cursor-pointer">
        <div className="text-center py-4 text-sm">
          Back to top
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1500px] mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-gray-300 hover:underline hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#131A22] border-t border-gray-600">
        <div className="max-w-[1500px] mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-xl font-bold mr-6">amazon</div>
            <div className="flex space-x-4 text-sm">
              <button className="border border-gray-600 px-3 py-1 rounded hover:border-white transition-colors">
                🌐 English
              </button>
              <button className="border border-gray-600 px-3 py-1 rounded hover:border-white transition-colors">
                ₹ Rupees
              </button>
              <button className="border border-gray-600 px-3 py-1 rounded hover:border-white transition-colors">
                India 🇮🇳
              </button>
            </div>
          </div>
        </div>

        <div className="text-center pb-6 text-xs text-gray-400">
          <p>© 1996-2025, Amazon.com, Vishal Team</p>
        </div>
      </div>
    </footer>
  );
}