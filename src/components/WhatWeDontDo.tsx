"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const donts = [
  {
    title: "Generic Software",
    description: "We don't sell one-size-fits-all solutions. Every automation is custom-built for your MedSpa."
  },
  {
    title: "Long-Term Contracts",
    description: "We don't lock you in. Our service is month-to-month because we believe in earning your business."
  },
  {
    title: "DIY Platforms",
    description: "We don't hand you a tool and wish you luck. We build, deploy, and manage everything for you."
  },
  {
    title: "Generic Support",
    description: "You won't get a ticket number and hope for the best. You get a dedicated specialist who knows your business."
  }
];

const dos = [
  "Custom automation tailored to your workflow",
  "Month-to-month service with no lock-in",
  "Done-for-you implementation and management",
  "Dedicated MedSpa automation specialist",
  "HIPAA-compliant architecture",
  "Measurable results and ROI reports"
];

export default function WhatWeDontDo() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="what-we-dont-do" className="section-padding relative bg-slate-900/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">Our Approach</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            What We <span className="text-red-400">Don't</span> Do
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We're different from typical automation companies. Here's how.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* What we don't do */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <X className="w-6 h-6 text-red-400" />
              We Don't Believe In
            </h3>
            {donts.map((item, index) => (
              <motion.div
                key={item.title}
                className="p-5 rounded-xl bg-red-500/5 border border-red-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <h4 className="font-semibold text-red-300 mb-1">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* What we do */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-cyan-400" />
              Instead, We Offer
            </h3>
            {dos.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
