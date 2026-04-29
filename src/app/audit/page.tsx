"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles, CheckCircle, Loader2 } from "lucide-react";

export default function AuditPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    currentTools: "",
    biggestChallenge: "",
    mostManualTask: "",
    whatGetsMissed: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://jkautomations-backend.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.businessName,
          tools: formData.currentTools,
          manual: formData.biggestChallenge,
          missed: formData.mostManualTask,
          outcome: formData.whatGetsMissed,
          source: "audit",
          vertical: "medspa"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <motion.div
          className="max-w-md w-full text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-100 mb-4">
            Thank You!
          </h1>
          <p className="text-slate-400 mb-8">
            We've received your audit request. Our team will review your information 
            and contact you within 24 hours to schedule your free MedSpa Automation Audit.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cyan-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Free Assessment
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Get Your MedSpa <span className="gradient-text">Automation Audit</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tell us about your practice and we'll identify the biggest opportunities 
            for automation in your MedSpa.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass-card p-6 sm:p-8 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Hidden field for vertical */}
          <input type="hidden" name="vertical" value="medspa" />

          {/* Name & Email row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                placeholder="Dr. Jane Smith"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
                placeholder="jane@yourmedspa.com"
              />
            </div>
          </div>

          {/* Business Name */}
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-slate-300 mb-2">
              Business Name *
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              required
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
              placeholder="Radiance MedSpa"
            />
          </div>

          {/* Current Tools */}
          <div>
            <label htmlFor="currentTools" className="block text-sm font-medium text-slate-300 mb-2">
              What tools do you currently use? (EMR, scheduling, etc.)
            </label>
            <input
              type="text"
              id="currentTools"
              name="currentTools"
              value={formData.currentTools}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
              placeholder="e.g., Zenoti, Acuity, Square, etc."
            />
          </div>

          {/* Biggest Challenge */}
          <div>
            <label htmlFor="biggestChallenge" className="block text-sm font-medium text-slate-300 mb-2">
              What's your biggest challenge right now? *
            </label>
            <textarea
              id="biggestChallenge"
              name="biggestChallenge"
              required
              rows={3}
              value={formData.biggestChallenge}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
              placeholder="e.g., No-shows, slow response times, manual follow-ups..."
            />
          </div>

          {/* Most Manual Task */}
          <div>
            <label htmlFor="mostManualTask" className="block text-sm font-medium text-slate-300 mb-2">
              What task takes up most of your staff's time? *
            </label>
            <textarea
              id="mostManualTask"
              name="mostManualTask"
              required
              rows={3}
              value={formData.mostManualTask}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
              placeholder="e.g., Answering phones, sending reminders, managing intake forms..."
            />
          </div>

          {/* What Gets Missed */}
          <div>
            <label htmlFor="whatGetsMissed" className="block text-sm font-medium text-slate-300 mb-2">
              What important tasks often get missed or delayed? *
            </label>
            <textarea
              id="whatGetsMissed"
              name="whatGetsMissed"
              required
              rows={3}
              value={formData.whatGetsMissed}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-none"
              placeholder="e.g., Follow-up calls, review requests, rebooking reminders..."
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Get My Free Audit"
            )}
          </button>

          <p className="text-center text-slate-500 text-sm">
            We respect your privacy. Your information will never be shared.
          </p>
        </motion.form>
      </div>
    </div>
  );
}
