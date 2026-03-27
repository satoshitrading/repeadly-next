'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type BillingPeriod = "monthly" | "quarterly" | "annual";

const billingOptions: { key: BillingPeriod; label: string }[] = [
  { key: "monthly", label: "Monthly" },
  { key: "quarterly", label: "Quarterly" },
  { key: "annual", label: "Annual" },
];

const plans = [
  {
    name: "Start",
    prices: { monthly: "$149", quarterly: "$129", annual: "$99" },
    period: { monthly: "/mo", quarterly: "/mo", annual: "/mo" },
    description: "Perfect for getting started",
    features: ["1 promotion", "1 pathname", "No managers", "Unlimited digital cards", "Unlimited push notifications"],
    cta: "Get started free",
    featured: false,
  },
  {
    name: "Grow",
    prices: { monthly: "$199", quarterly: "$159", annual: "$129" },
    period: { monthly: "/mo", quarterly: "/mo", annual: "/mo" },
    description: "For businesses ready to scale",
    features: ["3 promotions", "3 locations", "10 managers", "Unlimited digital cards", "Unlimited push notifications"],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Business",
    prices: { monthly: "$299", quarterly: "$249", annual: "$199" },
    period: { monthly: "/mo", quarterly: "/mo", annual: "/mo" },
    description: "For multi-pathname businesses",
    features: ["10 promotions", "10 locations", "50 managers", "Unlimited digital cards", "Unlimited push notifications"],
    cta: "Get started free",
    featured: false,
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<BillingPeriod>("annual");

  return (
    <section className="py-24" id="pricing">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Start your 14-day free trial. Upgrade when you're ready.
          </p>

          {/* Billing tabs */}
          <div className="inline-flex items-center gap-1 mt-8 p-1 rounded-xl bg-muted">
            {billingOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setBilling(opt.key)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  billing === opt.key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative p-8 rounded-2xl border-2 ${
                plan.featured
                  ? "border-primary bg-card shadow-xl shadow-primary/10 scale-105"
                  : "border-border bg-card"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
              <div className="mt-6 mb-8">
                <span className="text-5xl font-bold tracking-tight">{plan.prices[billing]}</span>
                {plan.period[billing] && <span className="text-muted-foreground">{plan.period[billing]}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "hero" : "hero-outline"}
                className="w-full h-12 rounded-xl"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;