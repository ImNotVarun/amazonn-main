import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  cartCount: number;
  user?: { email: string } | null;
  onLogout: () => void;
}

export function Header({ onLoginClick, cartCount, user, onLogout }: HeaderProps) {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getUserName = () => {
    if (!user?.email) return 'sign in';
    return user.email.split('@')[0];
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setShowAccountMenu(false);
    onLogout();
  };

  return (
    <header className="bg-[#131A22] text-white sticky top-0 z-50">

      {/* Main Header */}
      <div className="flex items-center px-4 py-2 max-w-[1500px] mx-auto flex-wrap md:flex-nowrap">
        {/* Mobile Hamburger */}
        <button
          className="md:hidden mr-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <div className="flex items-center mr-4 flex-shrink-0">
          <div className="text-white text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            amazon
          </div>
          <span className="text-xs text-gray-300 ml-1">.com</span>
        </div>

        {/* Deliver to */}
        <div className="hidden md:flex items-center mr-4 text-sm hover:border border-white p-2 rounded cursor-pointer">
          <MapPin className="w-4 h-4 mr-1" />
          <div>
            <div className="text-xs text-gray-300">Deliver to</div>
            <div className="font-bold">India</div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-3xl mx-4 w-full md:w-auto order-3 md:order-2">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search Amazon"
              className="flex-1 px-4 py-3 text-black text-sm rounded-l-md focus:outline-none w-full shadow-sm"
            />
            <button className="bg-orange-400 hover:bg-orange-500 px-4 py-3 rounded-r-md transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side Menu */}
        <div className="hidden md:flex items-center space-x-4 order-2 md:order-3">
          {/* Language */}
          <div className="hidden md:flex items-center mr-4 text-sm hover:border border-white p-2 rounded cursor-pointer">
            <img src="https://flagcdn.com/w20/in.png" alt="US" className="w-6 h-4 mr-1" />
            <span>EN</span>
            <ChevronDown className="w-3 h-3 ml-1" />
          </div>

          {/* Account */}
          <div
            className="relative mr-4 text-sm hover:border border-white p-2 rounded cursor-pointer"
            onClick={() => setShowAccountMenu(!showAccountMenu)}
          >
            <div className="text-xs text-gray-300">
              {user ? `Hello, ${getUserName()}` : 'Hello, sign in'}
            </div>
            <div className="font-bold flex items-center">
              Account & Lists <ChevronDown className="w-3 h-3 ml-1" />
            </div>

            {showAccountMenu && (
              <div className="absolute top-full right-0 mt-1 bg-white text-black rounded-md shadow-lg w-80 z-50">
                <div className="p-4">
                  {!user ? (
                    <>
                      <button
                        onClick={onLoginClick}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded mb-3 font-medium transition-colors"
                      >
                        Sign in
                      </button>
                      <p className="text-sm text-center">
                        New customer?{' '}
                        <button onClick={onLoginClick} className="text-blue-600 hover:underline">
                          Start here.
                        </button>
                      </p>
                    </>
                  ) : (
                    <div className="text-center">
                      <p className="text-sm mb-3">Signed in as: <strong>{user.email}</strong></p>
                      <button
                        onClick={handleLogout}
                        className="w-full bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded font-medium transition-colors"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
                <div className="border-t p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h3 className="font-semibold mb-2">Your Lists</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li className="hover:text-orange-500 cursor-pointer">Create a List</li>
                        <li className="hover:text-orange-500 cursor-pointer">Find a List or Registry</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Your Account</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li className="hover:text-orange-500 cursor-pointer">Account</li>
                        <li className="hover:text-orange-500 cursor-pointer">Orders</li>
                        <li className="hover:text-orange-500 cursor-pointer">Recommendations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Returns & Orders */}
          <div className="hidden md:block mr-4 text-sm hover:border border-white p-2 rounded cursor-pointer">
            <div className="text-xs text-gray-300">Returns</div>
            <div className="font-bold">& Orders</div>
          </div>

          {/* Cart */}
          <div className="flex items-center text-sm hover:border border-white p-2 rounded cursor-pointer">
            <div className="relative">
              <ShoppingCart className="w-8 h-8" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="font-bold ml-2">Cart</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#232F3E] p-4 space-y-2">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="hover:border border-white p-1 rounded transition-all">Today's Deals</a>
            <a href="#" className="hover:border border-white p-1 rounded transition-all">Prime Video</a>
            <a href="#" className="hover:border border-white p-1 rounded transition-all">Registry</a>
            <a href="#" className="hover:border border-white p-1 rounded transition-all">Gift Cards</a>
            <a href="#" className="hover:border border-white p-1 rounded transition-all">Customer Service</a>
            <a href="#" className="hover:border border-white p-1 rounded transition-all">Sell</a>
          </nav>

          {/* Mobile Account Section */}
          <div className="pt-4 border-t border-gray-600">
            {!user ? (
              <button
                onClick={onLoginClick}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded font-medium transition-colors"
              >
                Sign in
              </button>
            ) : (
              <div className="space-y-2">
                <p className="text-white text-sm">Hello, {getUserName()}</p>
                <button
                  onClick={handleLogout}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded font-medium transition-colors"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Info Bar */}
      <div className="bg-[#37475A] py-2 text-center text-sm">
        <div className="max-w-[1500px] mx-auto px-4">
          You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.{' '}
          <button className="text-cyan-300 hover:underline">Click here to go to amazon.in</button>
        </div>
      </div>
    </header>
  );
}
