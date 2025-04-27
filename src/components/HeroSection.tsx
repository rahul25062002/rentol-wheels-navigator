
import React from 'react';
import { Edit2, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';


const HeroSection = () => {
  const [pickupDate, setPickupDate] = React.useState<Date>();
  const [returnDate, setReturnDate] = React.useState<Date>();
  const handleScroll = (location) => {
    const el = document.getElementById(location);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <section className="relative bg-gradient-to-r from-rentol-blue to-rentol-blue/90 text-white py-16 md:py-28" id='hero'>
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Perfect <span className="text-rentol-orange">Rental Car</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Explore our wide range of vehicles for any occasion. Easy booking, reliable service, and competitive rates.
          </p>
          <Button className="bg-rentol-orange hover:bg-rentol-orange/90 text-white" onClick={() => handleScroll('featured-cars')}>
            Browse Cars
          </Button>
        </div>
        
        {/* Search Form */}



      </div>
    </section>
  );
};

export default HeroSection;
