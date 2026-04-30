"use client";

import Link from "next/link";
import { Sparkles, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Smart Scheduling", href: "#services" },
    { label: "Patient Follow-ups", href: "#services" },
    { label: "Digital Intake", href: "#services" },
    { label: "Review Generation", href: "#services" },
    { label: "AI Chatbot", href: "#services" },
  ],
  company: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Backend Services", href: "#backend" },
    { label: "Get Audit", href: "/audit" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "HIPAA Compliance", href: "#" },
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-100">MedClaw</span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              BAAS for MedSpas. We build, manage, and optimize your automation workflows 
              24/7 so you can focus on what matters most—your patients.
            </p>
            <div className="space-y-3">
              <a href="tel:6194550700" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(619) 455-0700</span>
              </a>
              <a href="mailto:hello@medclaw.io" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@medclaw.io</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">San Diego, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MedClaw by JK Automations. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            A JK Automations Company
          </p>
        </div>
      </div>
    </footer>
  );
}
