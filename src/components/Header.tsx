"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC, NAV_LINKS } from "@/lib/data";
import { useAppointment } from "@/context/AppointmentContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useAppointment();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-sky-100/80 bg-white/90 backdrop-blur-md">
        <div className="section-container flex h-16 items-center justify-between lg:h-20">
          <a href="#home" className="group flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-lg font-bold text-white shadow-lg shadow-sky-500/30">
              AV
            </span>
            <div className="leading-tight">
              <p className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                {CLINIC.name}
              </p>
              <p className="hidden text-xs text-slate-500 sm:block">
                Chennai · OMR
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openModal}
              className="btn-primary hidden !py-2.5 !px-5 sm:inline-flex"
            >
              Book Appointment
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-sky-100 bg-white lg:hidden"
          >
            <nav className="section-container flex flex-col gap-1 py-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openModal();
                }}
                className="btn-primary mt-2 w-full"
              >
                Book Appointment
              </button>
              <a
                href={`tel:${CLINIC.phone}`}
                className="btn-secondary mt-2 w-full gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
