"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Clock, Users, Lock, HeadphonesIcon, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "MedSpa Specialized",
    description: "We only work with MedSpas. We understand your unique challenges, compliance needs, and patient journey."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Most automations are live within 2 weeks. No lengthy implementation or complex training required."
  },
  {
    icon: Clock,
    title: "Done-For-You",
    description: "We build, deploy, and manage everything. You focus on treatments while we handle the technology."
  },
  {
    icon: Lock,
    title: "HIPAA Compliant",
    description: "All automations are built with HIPAA compliance at their core. Your patient data is always protected."
  },
  {
    icon: Users,
    title: "White Glove Onboarding",
    description: "Personal onboarding specialist ensures your automations match your exact workflow preferences."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our team is always available. Get help when you need it, not during business hours."
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "See exactly how much time and money you're saving with monthly performance reports."
  },
  {
    icon: Award,
    title: "No Long-Term Contracts",
    description: "Month-to-month service. We earn your business every month through results, not contracts."
  }
];

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = reason.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors group"
    >
      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
        <Icon className="w-5 h-5 text-cyan-400" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-100 mb-1">{reason.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding relative bg-slate-900/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Header and image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">Why MedClaw</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Why Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We don't just build automations—we become your technology partner. 
              Our sole focus is helping MedSpas like yours operate more efficiently 
              and deliver exceptional patient experiences.
            </p>

            {/* Capabilities */}
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-xl glass-card">
                <div className="font-semibold text-slate-100 mb-1">BAAS — fully managed</div>
                <div className="text-slate-400 text-sm">We build, run, and optimize every workflow. You never touch the tech.</div>
              </div>
              <div className="p-4 rounded-xl glass-card">
                <div className="font-semibold text-slate-100 mb-1">Humans + agents working together</div>
                <div className="text-slate-400 text-sm">Dedicated team members oversee every AI agent so nothing falls through the cracks.</div>
              </div>
              <div className="p-4 rounded-xl glass-card">
                <div className="font-semibold text-slate-100 mb-1">Live in under two weeks</div>
                <div className="text-slate-400 text-sm">Most automations are deployed and running before your next billing cycle.</div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Reasons grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {reasons.map((reason, index) => (
              <ReasonCard key={reason.title} reason={reason} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
