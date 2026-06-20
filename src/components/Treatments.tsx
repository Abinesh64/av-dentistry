"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Crown,
  Gem,
  HeartPulse,
  MinusCircle,
  Shield,
  Sparkles,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { TREATMENTS } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Shield,
  Activity,
  MinusCircle,
  Crown,
  Sun,
  Gem,
  HeartPulse,
};

export default function Treatments() {
  return (
    <section id="treatments" className="bg-surface py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </p>
          <h2 className="section-heading mt-2">Treatments We Offer</h2>
          <p className="section-subheading mx-auto">
            Comprehensive dental care tailored to your needs, from preventive
            checkups to advanced cosmetic procedures.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map((treatment, index) => {
            const Icon = iconMap[treatment.icon];
            return (
              <motion.article
                key={treatment.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-hover group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-primary transition-colors group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {treatment.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {treatment.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
