"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight, X } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Charity Gala 2025",
    description: "Join us for an elegant evening of music, storytelling, and fundraising in support of our six core programs. Featuring live performances, a silent auction, and inspiring stories from program beneficiaries.",
    date: "August 15, 2025",
    time: "6:00 PM – 10:00 PM",
    location: "Fairmont Royal York, Toronto, ON",
    capacity: 300,
    registered: 187,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Fundraising",
  },
  {
    id: 2,
    title: "Youth Empowerment Summit",
    description: "A day-long summit bringing together youth from across Canada and beyond to share ideas, build networks, and learn from leading changemakers in the nonprofit and business sectors.",
    date: "September 5, 2025",
    time: "9:00 AM – 5:00 PM",
    location: "MaRS Discovery District, Toronto, ON",
    capacity: 200,
    registered: 143,
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    category: "Summit",
  },
  {
    id: 3,
    title: "Volunteer Orientation Day",
    description: "New and prospective volunteers are invited to learn about our programs, meet the team, and discover how to contribute their skills to creating lasting change.",
    date: "September 20, 2025",
    time: "10:00 AM – 2:00 PM",
    location: "Virtual & In-Person (Toronto, ON)",
    capacity: 100,
    registered: 62,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
    category: "Volunteer",
  },
  {
    id: 4,
    title: "Gender Equality Roundtable",
    description: "A policy roundtable bringing together government representatives, civil society organizations, and gender equality experts to advance gender protection policies in Canada.",
    date: "October 10, 2025",
    time: "2:00 PM – 5:00 PM",
    location: "Ottawa Convention Centre, Ottawa, ON",
    capacity: 80,
    registered: 35,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    category: "Advocacy",
  },
];

const pastEvents = [
  {
    id: 5,
    title: "World Humanitarian Day Community Walk",
    date: "August 19, 2024",
    location: "High Park, Toronto, ON",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=70",
    attendees: 450,
  },
  {
    id: 6,
    title: "Child Protection Awareness Week",
    date: "June 2–7, 2024",
    location: "Virtual & Multiple Locations",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=70",
    attendees: 1200,
  },
  {
    id: 7,
    title: "Annual Volunteer Appreciation Dinner",
    date: "December 10, 2024",
    location: "Delta Hotels, Toronto, ON",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=70",
    attendees: 200,
  },
];

export default function EventsPage() {
  const [registerModal, setRegisterModal] = useState<(typeof upcomingEvents)[0] | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setRegisterModal(null);
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "" });
    }, 2000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Join Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Events
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Connect with our community through fundraisers, summits, workshops, and awareness campaigns.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimateOnScroll className="mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary">Upcoming Events</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <AnimateOnScroll key={event.id} delay={index * 0.08}>
                <div className="card overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-3 left-3 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold text-primary mb-3">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 text-gold" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4 text-gold" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4 text-gold" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4 text-gold" />
                        {event.registered}/{event.capacity} registered
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
                      <div
                        className="bg-gold h-1.5 rounded-full transition-all"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      />
                    </div>

                    <button
                      onClick={() => setRegisterModal(event)}
                      className="btn-primary w-full justify-center gap-2 text-sm"
                    >
                      Register Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimateOnScroll className="mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary">Past Events</h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <AnimateOnScroll key={event.id} delay={index * 0.08}>
                <div className="card overflow-hidden group opacity-80 hover:opacity-100 transition-opacity">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-primary/30" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-gray-900 text-sm mb-1">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.date}</p>
                    <p className="text-xs text-gray-400">{event.location}</p>
                    <p className="text-xs font-semibold text-primary mt-2">{event.attendees} attendees</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <AnimatePresence>
        {registerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setRegisterModal(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                aria-label="Close registration form"
              >
                <X className="w-4 h-4" />
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">You&apos;re Registered!</h3>
                  <p className="text-gray-600">A confirmation email will be sent to {formData.email}.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-heading font-bold text-primary mb-1">Register for Event</h3>
                  <p className="text-sm text-gray-500 mb-6">{registerModal.title}</p>

                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <label className="label" htmlFor="reg-name">Full Name *</label>
                      <input
                        id="reg-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-field"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="reg-email">Email *</label>
                      <input
                        id="reg-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-field"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="label" htmlFor="reg-phone">Phone</label>
                      <input
                        id="reg-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-field"
                        placeholder="+1 (000) 000-0000"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      Confirm Registration
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
