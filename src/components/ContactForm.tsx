
import React, { useState } from 'react';
import { Edit2, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast"




const ContactForm = () => {
  const { toast } = useToast()
  const [form, setForm] = useState({
    name: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({
        title: "Error",
        description: "Please fill all the required fields.",
      });
      return;
    }
    if (form.phone.length < 10) {
      toast({
        title: "Error",
        description: "Please enter a valid phone number.",
      });
      return;
    }
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
      .then(() => {
        toast({
          title: "Success!",
          description: "Form submitted successfully , we will contact you soon.",
        })
        setForm({ name: "", phone: "", description: "" });
      })
      .catch((err) => {
        toast({
          title: "Something went wrong",
          description: "Please try again later, can use whatsapp for urgent queries.",
          action: <Button className="bg-rentol-orange hover:bg-rentol-orange/90 text-white" variant="link" onClick={() => window.open('https://wa.me/917870807536', '_blank')}>WhatsApp</Button>,
        })
      });
  }
return (
  <section className="w-full bg-gray-50 py-16" id='contact'>
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl px-8 py-10">
      <h2 className="text-2xl font-semibold text-rentol-blue mb-6 text-center">Search Rental Cars</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <div className="relative group">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 transition-all duration-300 group-focus-within:text-rentol-orange" />
            <Input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-rentol-orange transition-all duration-300"
            />
          </div>
          <p className="text-xs text-red-500 mt-1">* Name is required</p>
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
          <div className="relative group">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 transition-all duration-300 group-focus-within:text-rentol-orange" />
            <Input
              type="number"
              placeholder="Mobile number"
              name="phone"
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-rentol-orange transition-all duration-300"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <p className="text-xs text-red-500 mt-1">* Valid number required</p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <div className="relative group">
            <Edit2 className="absolute left-3 top-3 h-5 w-5 text-gray-400 transition-all duration-300 group-focus-within:text-rentol-orange" />
            <Textarea
              placeholder="Write a brief description"
              rows={3}
              value={form.description}
              name="description"
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-rentol-orange resize-none transition-all duration-300"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Optional</p>
        </div>

        {/* Submit Button */}
        <div>
          <div id="html_element"></div>
          <Button
            type="submit"
            className="w-full bg-rentol-orange hover:bg-rentol-orange/90 text-white py-2.5 rounded-lg shadow-md transition-all duration-300"
          >
            Search Cars
          </Button>
        </div>

      </form>
    </div>
  </section>

);
};

export default ContactForm;
