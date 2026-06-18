"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    quote:
      "World Impact Initiative gave me the skills and confidence to start my own business. Today I employ five people from my community. My life has completely changed.",
    name: "Amara K.",
    role: "Youth Empowerment Program Graduate",
    country: "🇬🇭 Ghana",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    quote:
      "The disability inclusion program helped me access education I never thought possible. Now I am studying to become an engineer. I am proof that inclusion changes everything.",
    name: "David M.",
    role: "Disability Inclusion Beneficiary",
    country: "🇳🇬 Nigeria",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "When our village was devastated by floods, World Impact Initiative was there with food, shelter, and hope. Their crisis response saved our community.",
    name: "Fatima R.",
    role: "Crisis Response Beneficiary",
    country: "🇵🇰 Pakistan",
    image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=200&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Stories of Change
          </p>
          <h2 id="testimonials-heading" className="section-title mb-4">
            Voices From the Field
          </h2>
          <p className="section-subtitle">
            Real stories from the people whose lives have been transformed by
            your generosity and support.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <AnimateOnScroll key={item.name} delay={index * 0.1}>
              <div className="card p-8 flex flex-col h-full">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-gold mb-4" />

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed italic mb-6 flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.country}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
