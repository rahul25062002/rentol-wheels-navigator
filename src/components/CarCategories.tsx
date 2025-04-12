
import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Economy',
    image: 'https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    count: 12,
  },
  {
    id: 2,
    name: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    count: 24,
  },
  {
    id: 3,
    name: 'Luxury',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    count: 16,
  },
  {
    id: 4,
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    count: 8,
  },
];

const CarCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Browse By Category</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Find the perfect vehicle for your needs by exploring our diverse categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rentol-blue/80 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-90">{category.count} vehicles</span>
                  <span className="flex items-center text-rentol-orange group-hover:translate-x-1 transition-transform">
                    View All <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCategories;
