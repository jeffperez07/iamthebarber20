import React, { useRef, useEffect, useState } from 'react';
import { Calendar, Clock, Scissors, User, Mail, Phone } from 'lucide-react';

const Booking = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    barber: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Booking submission:', formData);
    alert('Thank you! Your appointment request has been received. We will confirm shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      barber: '',
      date: '',
      time: ''
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="booking" 
      className="py-20 bg-zinc-900 opacity-0 translate-y-10 transition-all duration-1000" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Book Your <span className="text-red-600">Appointment</span></h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            Schedule your next grooming session with our expert barbers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-800 rounded-sm shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 bg-zinc-700 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Book With Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-red-600 rounded-full">
                      <Scissors size={16} />
                    </div>
                    <p>Expert barbers with years of experience</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-red-600 rounded-full">
                      <Clock size={16} />
                    </div>
                    <p>Convenient scheduling that respects your time</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-red-600 rounded-full">
                      <Calendar size={16} />
                    </div>
                    <p>Flexible appointment options</p>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-gray-400">
                  Need to cancel or reschedule? No problem. Just give us 24 hours notice.
                </p>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      <User size={16} className="inline mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      <Phone size={16} className="inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      <Scissors size={16} className="inline mr-2" />
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                    >
                      <option value="">Select a service</option>
                      <option value="classic-cut">Classic Cut</option>
                      <option value="beard-trim">Beard Trim</option>
                      <option value="premium-package">Premium Package</option>
                      <option value="custom-design">Custom Design</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      <User size={16} className="inline mr-2" />
                      Barber
                    </label>
                    <select
                      name="barber"
                      value={formData.barber}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                    >
                      <option value="">Select a barber</option>
                      <option value="james">James Wilson</option>
                      <option value="marcus">Marcus Johnson</option>
                      <option value="david">David Rodriguez</option>
                      <option value="any">No preference</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      <Clock size={16} className="inline mr-2" />
                      Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-sm transition-colors duration-300"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;