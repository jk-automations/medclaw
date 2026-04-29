"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Hammer, Rocket, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Hammer,
    title: "BUILD",
    subtitle: "We architect your automation",
    description: "We analyze your current workflows and build custom automations tailored to your MedSpa's unique processes.",
    features: [
      "Custom workflow mapping",
      "Integration with your existing tools",
      "HIPAA-compliant architecture",
      "Personalized automation playbook"
    ],
    color: "cyan"
  },
  {
    icon: Rocket,
    title: "DEPLOY",
    subtitle: "Seamless integration",
    description: "We deploy your automations with zero downtime, ensuring a smooth transition for your staff and patients.",
    features: [
      "Zero-downtime deployment",
      "Staff training included",
      "Parallel testing period",
      "24/7 monitoring setup"
    ],
    color: "blue"
  },
  {
    icon: Settings,
    title: "MANAGE",
    subtitle: "We handle the maintenance",
    description: "Our team continuously optimizes and maintains your automations, so you can focus on growing your practice.",
    features: [
      "Continuous optimization",
      "Monthly performance reports",
      "Proactive troubleshooting",
      "Scalable as you grow"
    ],
    color: "cyan"
  }
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="glass-card p-8 h-full hover:border-cyan-500/40 transition-colors duration-300">
        {/* Step number */}
        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/30">
          {index + 1}
        </div>

        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-${step.color}-500/10 flex items-center justify-center mb-6`}>
          <Icon className={`w-7 h-7 text-${step.color}-400`} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
        <p className={`text-${step.color}-400 font-medium mb-4`}>{step.subtitle}</p>

        {/* Description */}
        <p className="text-slate-400 mb-6 leading-relaxed">
          {step.description}
        </p>

        {/* Features */}
        <ul className="space-y-3">
          {step.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Connector line (not on last item) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
      )}
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding relative" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From concept to completion, we handle every aspect of your automation journey.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
