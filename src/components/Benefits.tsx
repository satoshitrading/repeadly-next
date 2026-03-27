'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";
import { Heart, Repeat, Zap, Target } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Build genuine loyalty",
    description:
      "75% of consumers said receiving an incentive increases the likelihood of making a purchase.",
    source: "https://nmgprod.s3.amazonaws.com/media/files/97/e3/97e3466268a5f6a39748b0acf861188d/asset_file.pdf",
    },
  {
    icon: Repeat,
    title: "Boost repeat visits",
    description:
      "Loyal customers are 5x more likely to purchase again and 4x more likely to refer a friend.",
    source: "https://www.forbes.com/sites/blakemorgan/2019/09/24/50-stats-that-prove-the-value-of-customer-experience/",
    },
  {
    icon: Zap,
    title: "See results fast",
    description:
      "84% of companies that improve their customer experience report an increase in revenue.",
    source: "https://www.forbes.com/sites/blakemorgan/2019/09/24/50-stats-that-prove-the-value-of-customer-experience/",
    },
  {
    icon: Target,
    title: "Targeted engagement",
    description:
      "Personalized offers make customers 78% more likely to buy again.",
    source: "",
    },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-card" id="benefits">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Why Repeadly
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            More than just a rewards program
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            We help small businesses build the kind of customer loyalty that big brands spend millions trying to create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="flex gap-5 p-6 rounded-2xl bg-background border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {b.description}
                </p>
                <a 
                className="text-primary text-xs font-semibold mt-3 cursor-pointer hover:underline"
                href={b.source}
                >
                  Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;