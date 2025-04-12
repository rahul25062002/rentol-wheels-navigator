
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-rentol-light-gray">
        <div className="container-custom py-20 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-6xl font-bold text-rentol-blue mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-rentol-blue mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            <Button asChild className="bg-rentol-orange hover:bg-rentol-orange/90 text-white">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Homepage
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
