'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We saw a 40% increase in repeat customers within the first month. This tool pays for itself.",
    name: "Maria Chen",
    role: "Owner, Sunrise Bakery",
    rating: 5,
  },
  {
    quote: "Our customers love earning rewards. It's brought so much energy back to our shop.",
    name: "James Kowalski",
    role: "Manager, Corner Barber Co.",
    rating: 5,
  },
  {
    quote: "Setup took 10 minutes and we started seeing results the same week. Incredible.",
    name: "Priya Nair",
    role: "Owner, Spice Route Café",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-card" id="testimonials">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Trusted by local businesses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Loved by 2,000+ businesses
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-8 rounded-2xl bg-background border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;