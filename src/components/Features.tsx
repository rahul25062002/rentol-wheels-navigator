
import React from 'react';
import { Shield, Clock, Award, ThumbsUp } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Shield,
    title: 'Secure Booking',
    description: 'Your security is our priority. All transactions are protected with advanced encryption.',
  },
  {
    id: 2,
    icon: Clock,
    title: 'Fast & Easy Process',
    description: 'Book your vehicle in minutes with our streamlined, user-friendly booking process.',
  },
  {
    id: 3,
    icon: Award,
    title: 'Quality Vehicles',
    description: 'Our fleet consists of well-maintained, regularly serviced vehicles for your safety.',
  },
  {
    id: 4,
    icon: ThumbsUp,
    title: '24/7 Customer Support',
    description: 'Our dedicated team is available round the clock to assist with any questions or concerns.',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white" id='features'>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Experience the Rentol difference with our premium services and customer-focused benefits
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="p-6 rounded-lg bg-rentol-light-gray transition-transform hover:-translate-y-1"
            >
              <div className="bg-rentol-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-8 w-8 text-rentol-orange" />
              </div>
              <h3 className="text-xl font-semibold text-rentol-blue mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
