"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Tanvir Ahmed",
    role: "University Student",
    message:
      "Boi Bondhu Library made it so easy for me to borrow books online. The interface is clean and intuitive. I love how fast everything works.",
  },
  {
    name: "Rehana Sultana",
    role: "School Librarian",
    message:
      "Managing my small library was never this smooth! The book CRUD features and borrow summary are just what I needed.",
  },
  {
    name: "Mahfuz Rahman",
    role: "Book Enthusiast",
    message:
      "I was surprised how minimal and powerful this system is. Everything just works. Loved the dark mode support as well!",
  },
  {
    name: "Sadia Khatun",
    role: "IT Instructor",
    message:
      "A simple and efficient library system perfect for beginners and small teams. Highly recommended for educational use.",
  },
];

export default function TestimonialsCarousel() {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 24 },
    slideChanged() {
      resetTimer();
    },
  });

  const resetTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      slider.current?.next();
    }, 4500);
  };

  useEffect(() => {
    if (!slider) return;
    resetTimer();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [slider]);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        What Our Users Say
      </h2>

      <div
        ref={sliderRef}
        className="keen-slider rounded-3xl overflow-hidden"
        style={{ padding: "0 1rem" }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center"
            aria-label={`Testimonial from ${testimonial.name}`}
          >
            <Card className="bg-transparent border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-lg rounded-3xl p-8 max-w-3xl w-full">
              <CardContent className="flex flex-col justify-between h-full p-0 text-center">
                <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8 italic tracking-wide">
                  “{testimonial.message}”
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-xl mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
