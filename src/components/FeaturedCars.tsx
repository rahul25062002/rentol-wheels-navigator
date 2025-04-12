
import React from 'react';
import { Star, Users, Gauge, Fuel, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Car data
const featuredCars = [
  {
    id: 1,
    name: 'Toyota Camry',
    category: 'Sedan',
    price: 45,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
  },
  {
    id: 2,
    name: 'Honda CR-V',
    category: 'SUV',
    price: 65,
    image: 'https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: 3,
    name: 'Ford Mustang',
    category: 'Sports',
    price: 85,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Gasoline',
  },
  {
    id: 4,
    name: 'BMW X5',
    category: 'Luxury SUV',
    price: 125,
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Diesel',
  },
];

const FeaturedCars = () => {
  return (
    <section className="py-16 bg-rentol-light-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Vehicles</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explore our top-rated and most popular car rental options with premium features and services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-rentol-orange text-white px-2 py-1 rounded text-sm">
                  {car.category}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-rentol-blue">{car.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium ml-1">{car.rating}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Cog className="w-4 h-4 mr-1" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Gauge className="w-4 h-4 mr-1" />
                    <span>Unlimited</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Fuel className="w-4 h-4 mr-1" />
                    <span>{car.fuel}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <div>
                    <span className="text-xl font-bold text-rentol-blue">${car.price}</span>
                    <span className="text-gray-500 text-sm">/day</span>
                  </div>
                  <Button className="bg-rentol-blue hover:bg-rentol-blue/90 text-white">
                    Rent Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-rentol-orange hover:bg-rentol-orange/90 text-white">
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
