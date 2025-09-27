import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AuthModal } from './components/AuthModal';
import { HeroBanner } from './components/HeroBanner';
import { ProductCategories } from './components/ProductCategories';
import { PromoSection } from './components/PromoSection';
import { Footer } from './components/Footer';
import { BookShelf } from './components/BookShelf';
import { AppleSection } from './components/AppleSection';
import { DealsOfTheDay } from './components/DealsOfTheDay';
import { CustomerFavorites } from './components/CustomerFavorites';


interface User {
  id: string;
  name: string;
  email: string;
}

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing token on app load
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        try {
          const response = await fetch('http://localhost:5000/api/auth/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token })
          });

          if (response.ok) {
            const data = await response.json();
            setUser(data.user);
          } else {
            // Token is invalid, remove it
            localStorage.removeItem('token');
            localStorage.removeItem('userEmail');
          }
        } catch (error) {
          console.error('Error verifying token:', error);
          // Remove invalid token
          localStorage.removeItem('token');
          localStorage.removeItem('userEmail');
        }
      }
      
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const handleLoginSuccess = (userData: User, token: string) => {
    setUser(userData);
    localStorage.setItem('token', token);
    localStorage.setItem('userEmail', userData.email);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
  };

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onLoginClick={() => setShowAuthModal(true)}
        cartCount={cartCount}
        user={user}
        onLogout={handleLogout}
      />
      <HeroBanner />
      <ProductCategories />
      <AppleSection/>
      <PromoSection />
      <DealsOfTheDay/>
      <CustomerFavorites/>
      <BookShelf></BookShelf>
      <Footer />
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;