"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Calendar, 
  MessageSquare, 
  ClipboardList, 
  Star, 
  Phone, 
  Mail,
  Bot,
  Workflow
} from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered scheduling that fills your calendar while respecting provider preferences and treatment times.",
    benefits: ["24/7 booking", "No-show reduction", "Calendar optimization"]
  },
  {
    icon: MessageSquare,
    title: "Patient Follow-ups",
    description: "Automated post-treatment follow-ups that ensure patient satisfaction and drive repeat bookings.",
    benefits: ["Treatment reminders", "Satisfaction surveys", "Rebooking prompts"]
  },
  {
    icon: ClipboardList,
    title: "Digital Intake",
    description: "Streamlined digital intake forms that sync directly with your EMR, saving time and reducing errors.",
    benefits: ["Pre-visit completion", "EMR integration", "Photo uploads"]
  },
  {
    icon: Star,
    title: "Social Content",
    description: "Done-for-you TikTok and Instagram content that keeps your MedSpa visible without adding to your plate.",
    benefits: ["TikTok Reels", "Instagram posts", "Content calendar"]
  },
  {
    icon: Phone,
    title: "Voice AI",
    description: "AI voice agent handles inbound calls and SMS — books appointments, answers FAQs, and never misses a lead.",
    benefits: ["Answer every call", "Appointment booking", "SMS follow-up"]
  },
  {
    icon: Mail,
    title: "Lead Inbox",
    description: "Managed lead inbox that qualifies, routes, and follows up with every inquiry so no lead goes cold.",
    benefits: ["Lead qualification", "Auto follow-up", "CRM sync"]
  },
  {
    icon: Bot,
    title: "Social Account Management",
    description: "We manage your TikTok and Instagram presence — DMs, comments, story replies, and engagement.",
    benefits: ["DM management", "Comment replies", "Engagement growth"]
  },
  {
    icon: Workflow,
    title: "Managed Execution",
    description: "Humans and agents working together to run every workflow, monitor results, and handle escalations.",
    benefits: ["24/7 monitoring", "Human oversight", "Escalation handling"]
  }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-slate-100">{service.title}</h3>
      <p className="text-slate-400 mb-4 text-sm leading-relaxed">{service.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {service.benefits.map((benefit, i) => (
          <span 
            key={i} 
            className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50"
          >
            {benefit}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative bg-slate-900/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            BAAS: We Build, Manage,{" "}
            <span className="gradient-text">You Scale</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Complete automation solutions for MedSpas. We handle everything so you can focus on patients.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
