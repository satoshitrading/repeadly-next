'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";

const stats = [
  { value: "3x", label: "More repeat visits on average" },
  { value: "40%", label: "Increase in customer retention" },
  { value: "25%", label: "Higher average order value" },
  { value: "5 min", label: "To set up your first program" },
];

const Stats = () => {
  return (
    <section className="py-24" id="stats">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            By the numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Results that speak for themselves
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center p-8 rounded-2xl border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-5xl font-bold text-primary tracking-tight mb-3">
                {s.value}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;