"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, UserPlus, CalendarCheck, Sparkles, MessageCircle, Star, RefreshCw } from "lucide-react";

const workflows = [
  {
    id: "new-patient",
    title: "New Patient Journey",
    icon: UserPlus,
    description: "Convert inquiries into booked appointments automatically",
    steps: [
      { icon: MessageCircle, text: "Lead submits inquiry via website or social" },
      { icon: Sparkles, text: "AI qualifies lead and answers questions" },
      { icon: CalendarCheck, text: "Self-scheduling link sent instantly" },
      { icon: UserPlus, text: "Intake forms completed before visit" },
      { icon: Star, text: "Welcome sequence begins" }
    ]
  },
  {
    id: "treatment-followup",
    title: "Post-Treatment Care",
    icon: RefreshCw,
    description: "Ensure satisfaction and drive rebooking",
    steps: [
      { icon: MessageCircle, text: "Day 1: Aftercare instructions sent" },
      { icon: Sparkles, text: "Day 3: Check-in message deployed" },
      { icon: CalendarCheck, text: "Day 7: Satisfaction survey sent" },
      { icon: Star, text: "Day 14: Review request (if satisfied)" },
      { icon: RefreshCw, text: "Day 30: Rebooking reminder" }
    ]
  },
  {
    id: "review-generation",
    title: "Review Generation",
    icon: Star,
    description: "Systematically build your online reputation",
    steps: [
      { icon: Sparkles, text: "AI identifies satisfied patients" },
      { icon: MessageCircle, text: "Personalized review request sent" },
      { icon: Star, text: "Direct link to Google/Yelp" },
      { icon: RefreshCw, text: "Follow-up for non-responders" },
      { icon: MessageCircle, text: "Thank you message for reviewers" }
    ]
  }
];

function WorkflowCard({ workflow, index }: { workflow: typeof workflows[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = workflow.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-6 lg:p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-100">{workflow.title}</h3>
          <p className="text-slate-400 text-sm mt-1">{workflow.description}</p>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-0">
        {workflow.steps.map((step, i) => {
          const StepIcon = step.icon;
          return (
            <motion.div
              key={i}
              className="flex items-center gap-4 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 }}
            >
              {/* Connector line */}
              {i < workflow.steps.length - 1 && (
                <div className="absolute left-5 top-10 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-transparent" />
              )}
              
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center z-10 flex-shrink-0">
                <StepIcon className="w-4 h-4 text-cyan-400" />
              </div>
              
              {/* Text */}
              <div className="py-3 flex-1">
                <p className="text-slate-300 text-sm">{step.text}</p>
              </div>

              {/* Arrow */}
              {i < workflow.steps.length - 1 && (
                <ArrowRight className={`w-4 h-4 text-slate-600 transition-all duration-300 ${isHovered ? 'translate-x-1 text-cyan-400' : ''}`} />
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Workflows() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="workflows" className="section-padding relative" ref={sectionRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">Automated Workflows</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Popular <span className="gradient-text">Workflows</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            See how we automate your most important patient touchpoints.
          </p>
        </motion.div>

        {/* Workflows grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => (
            <WorkflowCard key={workflow.id} workflow={workflow} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
