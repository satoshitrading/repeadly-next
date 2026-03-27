'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";
import { QrCode, Gift, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Customers scan & earn",
    description: "Loyalty cards live in Apple or Google Wallet, letting customers track rewards while you capture contacts—no app needed.",
  },
  {
    icon: Gift,
    title: "Redeem rewards",
    description: "Create rewards like discounts, freebies, or VIP perks. Customers track and redeem them with their digital loyalty card.",
  },
  {
    icon: TrendingUp,
    title: "Watch sales grow",
    description: "Track repeat visits, customer spending, and program ROI with a real-time analytics dashboard and actionable insights.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-card" id="how-it-works">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            How it works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Three steps to more revenue
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative p-8 rounded-2xl bg-background border border-border hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="absolute top-8 right-8 text-6xl font-bold text-muted/60 font-display">
                {i + 1}
              </span>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;