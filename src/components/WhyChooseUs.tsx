"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  IndianRupee,
  MapPin,
  ShieldCheck,
  Smile,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { WHY_US } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Cpu,
  IndianRupee,
  Smile,
  ShieldCheck,
  MapPin,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </p>
          <h2 className="section-heading mt-2">The AV Dentistry Difference</h2>
          <p className="section-subheading mx-auto">
            We combine expert care, modern technology, and a patient-first
            approach to deliver exceptional dental experiences.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card-hover group rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/30 p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
