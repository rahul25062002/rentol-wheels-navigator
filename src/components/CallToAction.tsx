
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-rentol-blue text-white relative overflow-hidden" id='call-to-action'>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for your next adventure?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-lg">
              Book your ideal rental car today and make your journey memorable. 
              We offer competitive rates and exceptional service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-rentol-orange hover:bg-rentol-orange/90 text-white" onClick={() => window.open('https://wa.me/917870807536', '_blank')}>
                Book a Car Now
              </Button>
              <div className="flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-3">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Call us for booking</p>
                  <p className="text-lg font-semibold">+1 234 567 8901</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1549927681-0b673b8243ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Road trip adventure" 
              className="rounded-lg shadow-lg object-cover h-80 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
