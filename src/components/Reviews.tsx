"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { CLINIC, REVIEWS } from "@/lib/data";
import { getInitials } from "@/lib/utils";

import "swiper/css";
import "swiper/css/pagination";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Patient Reviews
          </p>
          <h2 className="section-heading mt-2">What Our Patients Say</h2>
          <p className="section-subheading mx-auto">
            Real experiences from patients who trust AV Dentistry for their
            dental care.
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
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.name}>
                <article className="card-hover flex h-full flex-col rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50/40 p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
                      {getInitials(review.name)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {review.name}
                      </h3>
                      <div className="mt-0.5 flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-slate-600">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href={CLINIC.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex gap-2"
          >
            View More Google Reviews
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
