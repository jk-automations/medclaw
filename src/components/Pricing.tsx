"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for single-location MedSpas just getting started with automation",
    monthlyPrice: 997,
    yearlyPrice: 797,
    features: [
      "5 managed automations",
      "Voice AI (calls & SMS)",
      "Lead inbox management",
      "Appointment reminders",
      "Email & SMS sequences",
      "Monthly optimization",
      "Email support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    description: "For established MedSpas ready to scale their operations",
    monthlyPrice: 1997,
    yearlyPrice: 1597,
    features: [
      "15+ managed automations",
      "Voice AI + social content",
      "TikTok & Instagram management",
      "Advanced patient journeys",
      "Weekly optimization",
      "Priority support",
      "Custom integrations",
      "Dedicated specialist"
    ],
    cta: "Start Growing",
    popular: true
  },
  {
    name: "Premium",
    description: "Full-scale MedSpa automation with social content, Voice AI, and a dedicated execution team",
    monthlyPrice: 3497,
    yearlyPrice: 2797,
    features: [
      "Unlimited automations",
      "Voice AI phone & SMS agent",
      "Social content (TikTok & Instagram)",
      "Social account management",
      "Managed lead inbox",
      "Dedicated humans + agents team",
      "Daily optimization",
      "24/7 priority support"
    ],
    cta: "Go Premium",
    popular: false
  }
];

function PricingCard({ plan, index, isYearly }: { plan: typeof plans[0]; index: number; isYearly: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 ${
        plan.popular 
          ? 'bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/50' 
          : 'glass-card border-slate-700/50'
      }`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name */}
      <h3 className="text-xl font-bold text-slate-100 mb-2">{plan.name}</h3>
      <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>

      {/* Price */}
      <div className="mb-6">
        {plan.monthlyPrice ? (
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold gradient-text">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            </span>
            <span className="text-slate-400">/month</span>
          </div>
        ) : (
          <div className="text-2xl font-bold gradient-text">Custom</div>
        )}
        {plan.monthlyPrice && isYearly && (
          <p className="text-cyan-400 text-sm mt-1">
            Save ${(plan.monthlyPrice - (plan.yearlyPrice || 0)) * 12}/year
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              plan.popular ? 'bg-cyan-500/20' : 'bg-slate-700'
            }`}>
              <Check className={`w-3 h-3 ${plan.popular ? 'text-cyan-400' : 'text-slate-400'}`} />
            </div>
            <span className="text-slate-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/audit"
        className={`w-full py-3 px-4 rounded-xl font-semibold text-center inline-flex items-center justify-center gap-2 transition-all ${
          plan.popular
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25'
            : 'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-600'
        }`}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">Investment</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            No hidden fees, no long-term contracts. Just results.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={`text-sm ${!isYearly ? 'text-slate-100' : 'text-slate-500'}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 rounded-full bg-slate-700 transition-colors"
          >
            <motion.div
              className="absolute top-1 w-5 h-5 rounded-full bg-cyan-400"
              animate={{ left: isYearly ? '32px' : '4px' }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm ${isYearly ? 'text-slate-100' : 'text-slate-500'}`}>
            Yearly
            <span className="ml-2 text-cyan-400 text-xs">(Save 20%)</span>
          </span>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} isYearly={isYearly} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-center text-slate-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          All plans include setup, training, and ongoing support. No hidden fees.
        </motion.p>
      </div>
    </section>
  );
}
