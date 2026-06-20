"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FACILITIES } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

export default function Facilities() {
  return (
    <section id="facilities" className="bg-surface py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Facilities
          </p>
          <h2 className="section-heading mt-2">World-Class Dental Environment</h2>
          <p className="section-subheading mx-auto">
            Modern facilities designed for your comfort, safety, and the best
            possible treatment outcomes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {FACILITIES.map((facility) => (
              <SwiperSlide key={facility.title}>
                <article className="card-hover overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {facility.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {facility.description}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
