import { Car, ShieldCheck, Users, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white" id='about'>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-rentol-dark mb-4">About <span className="text-rentol-primary">Rentol</span></h2>
          <p className="text-gray-600 text-lg">
            Discover who we are, what we stand for, and how we make your journey smoother and more exciting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-rentol-light-gray p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <Car size={40} className="mx-auto text-rentol-primary mb-4" />
            <h3 className="font-semibold text-xl text-rentol-dark">Wide Vehicle Selection</h3>
            <p className="text-gray-600 mt-2">Choose from a diverse range of cars for every journey and budget.</p>
          </div>

          <div className="bg-rentol-light-gray p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <ShieldCheck size={40} className="mx-auto text-rentol-primary mb-4" />
            <h3 className="font-semibold text-xl text-rentol-dark">Trusted & Secure</h3>
            <p className="text-gray-600 mt-2">We prioritize your safety with top-notch service and full transparency.</p>
          </div>

          <div className="bg-rentol-light-gray p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <Users size={40} className="mx-auto text-rentol-primary mb-4" />
            <h3 className="font-semibold text-xl text-rentol-dark">Customer Focused</h3>
            <p className="text-gray-600 mt-2">We listen, support, and make your rental experience smooth and enjoyable.</p>
          </div>

          <div className="bg-rentol-light-gray p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
            <Sparkles size={40} className="mx-auto text-rentol-primary mb-4" />
            <h3 className="font-semibold text-xl text-rentol-dark">Driven by Excellence</h3>
            <p className="text-gray-600 mt-2">We aim to deliver more than just a ride — we offer an experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
 