"use client";

import { motion } from "framer-motion";
import { CalendarHeart } from "lucide-react";
import { useAppointment } from "@/context/AppointmentContext";

export default function BookAppointment() {
  const { openModal } = useAppointment();

  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-sky-500 to-secondary px-8 py-16 text-center shadow-2xl shadow-sky-500/30 sm:px-16"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
              <CalendarHeart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Book Your Appointment Today
            </h2>
            <p className="mt-4 text-lg text-sky-100">
              Schedule your visit in just a few clicks.
            </p>
            <button
              type="button"
              onClick={openModal}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
