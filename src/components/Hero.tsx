'use client';

import Image from 'next/image';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";
import { ArrowRight } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';;;

const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide">
            Rewards that drive revenue
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
            Turn one-time buyers into{" "}
            <span className="text-gradient">loyal customers</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
            The simplest rewards program for small businesses. Boost repeat visits, 
            increase average spend, and build lasting customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="h-14 px-8 rounded-xl text-base">
              Start free trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="h-14 px-8 rounded-xl text-base" onClick={() => router.push("/calendar")}>
              See how it works
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            No credit card required · Setup in 5 minutes
          </p>
        </motion.div>

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl scale-90" />
            <Image src={heroImage} className="relative w-full animate-float"  width={75} height={75} alt="stars" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;