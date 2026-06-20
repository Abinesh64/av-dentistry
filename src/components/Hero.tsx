"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, Star } from "lucide-react";
import { CLINIC } from "@/lib/data";
import { useAppointment } from "@/context/AppointmentContext";

const highlights = [
  "Affordable Treatments",
  "Modern Equipment",
  "Experienced Care",
];

export default function Hero() {
  const { openModal } = useAppointment();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 pt-20 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />
        <svg
          className="absolute right-10 top-40 h-16 w-16 text-sky-200/60"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 6 12 6 12s6-8.5 6-12c0-3.5-2.5-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
        <svg
          className="absolute left-16 bottom-40 h-12 w-12 text-cyan-200/50"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
        </svg>
      </div>

      <div className="section-container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {CLINIC.rating} Google Rating
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your Smile Deserves{" "}
            <span className="gradient-text">Expert Care</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Advanced dental treatments, painless procedures, and compassionate
            care for the entire family.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={openModal} className="btn-primary">
              Book Appointment
            </button>
            <a href={`tel:${CLINIC.phone}`} className="btn-secondary gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-100 to-cyan-100 shadow-2xl shadow-sky-500/20">
            <Image
              src="https://images.unsplash.com/aphoto-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Professional dentist at AV Dentistry"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur sm:-left-8"
          >
            <p className="text-2xl font-bold text-primary">5+</p>
            <p className="text-sm text-slate-600">Years Experience</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-8 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur sm:-right-6"
          >
            <p className="text-2xl font-bold text-secondary">2000+</p>
            <p className="text-sm text-slate-600">Happy Patients</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
