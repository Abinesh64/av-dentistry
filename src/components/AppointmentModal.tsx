"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Clock, Phone, User, X } from "lucide-react";
import { APPOINTMENT_TREATMENTS, CLINIC } from "@/lib/data";
import { formatWhatsAppMessage, isValidIndianPhone } from "@/lib/utils";
import { useAppointment } from "@/context/AppointmentContext";

type FormData = {
  name: string;
  phone: string;
  date: string;
  time: string;
  treatment: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  phone: "",
  date: "",
  time: "",
  treatment: "",
};

export default function AppointmentModal() {
  const { isOpen, closeModal } = useAppointment();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm);
      setErrors({});
      setSubmitted(false);
    }
  }, [isOpen]);

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Full name is required";
    if (!form.phone.trim()) {
      next.phone = "Phone number is required";
    } else if (!isValidIndianPhone(form.phone)) {
      next.phone = "Enter a valid 10-digit mobile number";
    }
    if (!form.date) next.date = "Preferred date is required";
    if (!form.time) next.time = "Preferred time is required";
    if (!form.treatment) next.treatment = "Please select a treatment";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const message = formatWhatsAppMessage(form);
    const url = `${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  function updateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="appointment-title"
        >
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-label="Close appointment form"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="bg-gradient-to-r from-primary to-secondary px-6 py-5 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 id="appointment-title" className="text-xl font-bold">
                    Book Appointment
                  </h2>
                  <p className="mt-1 text-sm text-sky-100">
                    Fill in your details and we&apos;ll confirm shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full p-1.5 transition-colors hover:bg-white/20"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {submitted ? (
              <div className="px-6 py-10 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Appointment Request Sent!
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  We&apos;ll call or WhatsApp you shortly to confirm your
                  appointment.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn-primary mt-6"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6" noValidate>
                <Field
                  id="name"
                  label="Full Name"
                  required
                  icon={User}
                  error={errors.name}
                >
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className={inputClass(errors.name)}
                    placeholder="Enter your full name"
                  />
                </Field>

                <Field
                  id="phone"
                  label="Phone Number"
                  required
                  icon={Phone}
                  error={errors.phone}
                >
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={inputClass(errors.phone)}
                    placeholder="10-digit mobile number"
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    id="date"
                    label="Preferred Date"
                    required
                    icon={Calendar}
                    error={errors.date}
                  >
                    <input
                      id="date"
                      type="date"
                      value={form.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => updateField("date", e.target.value)}
                      className={inputClass(errors.date)}
                    />
                  </Field>

                  <Field
                    id="time"
                    label="Preferred Time"
                    required
                    icon={Clock}
                    error={errors.time}
                  >
                    <input
                      id="time"
                      type="time"
                      value={form.time}
                      onChange={(e) => updateField("time", e.target.value)}
                      className={inputClass(errors.time)}
                    />
                  </Field>
                </div>

                <Field
                  id="treatment"
                  label="Treatment / Concern"
                  required
                  error={errors.treatment}
                >
                  <select
                    id="treatment"
                    value={form.treatment}
                    onChange={(e) => updateField("treatment", e.target.value)}
                    className={inputClass(errors.treatment)}
                  >
                    <option value="">Select treatment</option>
                    {APPOINTMENT_TREATMENTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <button type="submit" className="btn-primary w-full !rounded-xl">
                  Confirm Appointment
                </button>

                <p className="text-center text-xs text-slate-500">
                  We&apos;ll call or WhatsApp you shortly to confirm your
                  appointment.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 ${
    error ? "border-red-300" : "border-slate-200"
  }`;
}

function Field({
  id,
  label,
  required,
  icon: Icon,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
        {Icon && <Icon className="h-4 w-4 text-primary" />}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
