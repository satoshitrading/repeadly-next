'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";
import { Clock, DollarSign, Users, BarChart3, Smartphone, SlidersHorizontal } from "lucide-react";

const features = [
  { icon: Clock, title: "Launch in minutes", description: "Create and launch your loyalty program in minutes—no technical setup required." },
  { icon: DollarSign, title: "Increase average spend", description: "Customers spend more when they're earning toward rewards." },
  { icon: Users, title: "Grow your customer base", description: "Loyal customers help spread the word and bring in new business." },
  { icon: BarChart3, title: "Real-time analytics", description: "See exactly how your rewards program impacts your bottom line." },
  { icon: Smartphone, title: "No app needed", description: "Customers save their loyalty card to Apple or Google Wallet." },
  { icon: SlidersHorizontal, title: "Easy to manage", description: "Create rewards, track customers, and manage your program from one simple dashboard." },
];

const Features = () => {
  return (
    <section className="py-24" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Everything you need to grow
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Built specifically for small businesses that want to compete with the big guys.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group p-7 rounded-2xl border border-border bg-card hover:bg-primary/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;