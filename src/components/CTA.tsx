'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-surface-dark p-12 md:p-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(36_90%_50%/0.15),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-surface-dark-foreground tracking-tight mb-6">
              Ready to reward your customers?
            </h2>
            <p className="text-surface-dark-foreground/70 text-lg max-w-lg mx-auto mb-10">
              Join thousands of small businesses using rewards to drive growth. 
              Start your free trial today — no credit card required.
            </p>
            <Button variant="hero" size="lg" className="h-14 px-10 rounded-xl text-base">
              Get started for free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;