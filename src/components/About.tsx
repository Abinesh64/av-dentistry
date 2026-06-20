"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-sky-500/10">
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
              alt="Dental care at AV Dentistry"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-20 lg:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            About Us
          </p>
          <h2 className="section-heading mt-2">About AV Dentistry</h2>
          <p className="section-subheading mt-4">
            At AV Dentistry, we are committed to providing comfortable,
            affordable, and high-quality dental care for patients of all ages.
            From routine dental checkups to advanced restorative and cosmetic
            procedures, our goal is to help every patient achieve a healthy
            and confident smile.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/50 p-5 shadow-sm"
              >
                <p className="text-2xl font-bold text-primary sm:text-3xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                  />
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
