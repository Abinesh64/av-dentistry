"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function MapSection() {
  return (
    <section id="contact" className="bg-surface py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Find Us
          </p>
          <h2 className="section-heading mt-2">Visit AV Dentistry</h2>
          <p className="section-subheading mx-auto">
            Conveniently located on OMR, Kandhanchavadi — easy to reach from
            anywhere in Chennai.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-12 grid gap-8 lg:grid-cols-5"
        >
          <div className="flex flex-col justify-center gap-6 lg:col-span-2">
            <div className="card-hover rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {CLINIC.address.line1}
                    <br />
                    {CLINIC.address.line2}
                    <br />
                    {CLINIC.address.city}
                    <br />
                    {CLINIC.address.state}
                  </p>
                </div>
              </div>
            </div>

            <div className="card-hover rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <a
                    href={`tel:${CLINIC.phone}`}
                    className="mt-1 inline-block text-sm text-primary hover:underline"
                  >
                    {CLINIC.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="card-hover rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Working Hours</h3>
                  <p className="mt-1 text-sm text-slate-600">{CLINIC.hours.days}</p>
                  <p className="text-sm text-slate-600">{CLINIC.hours.morning}</p>
                  <p className="text-sm text-slate-600">{CLINIC.hours.evening}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-sky-100 shadow-lg lg:col-span-3">
            <iframe
              title="AV Dentistry location on Google Maps"
              src={CLINIC.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[400px] w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
