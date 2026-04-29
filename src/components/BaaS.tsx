"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Shield, Code, Cloud, Settings } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Custom Backend Development",
    description: "Tailored backend solutions built specifically for your MedSpa's unique requirements."
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Scalable, secure database design that grows with your practice."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with full HIPAA compliance baked in."
  },
  {
    icon: Code,
    title: "API Development",
    description: "Custom APIs to connect your existing tools and enable seamless data flow."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Reliable, scalable cloud hosting on AWS or your preferred platform."
  },
  {
    icon: Settings,
    title: "Ongoing Management",
    description: "We handle maintenance, updates, and monitoring so you don't have to."
  }
];

export default function BaaS() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="backend" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/30 to-slate-900" />
      
      {/* Decorative grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">Backend as a Service</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Custom <span className="gradient-text">Backend Solutions</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Need more than automation? We build custom backend systems tailored to your MedSpa's 
              specific needs. From patient portals to custom EMR integrations, we handle the 
              technical complexity so you can focus on patient care.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our Backend as a Service offering gives you a dedicated technical team without the 
              overhead of hiring in-house developers. Perfect for MedSpas looking to build custom 
              software solutions.
            </p>

            {/* CTA */}
            <div className="mt-8 p-6 glass-card rounded-xl">
              <h4 className="font-semibold text-slate-100 mb-2">Need a Custom Solution?</h4>
              <p className="text-slate-400 text-sm mb-4">
                Let's discuss your unique requirements and build something tailored to your practice.
              </p>
              <a 
                href="/audit" 
                className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-2 group"
              >
                Schedule a consultation
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right - Features grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2 text-sm">{feature.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
