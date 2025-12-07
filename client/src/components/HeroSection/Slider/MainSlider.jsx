"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image from "../../../../public/images/9657270.jpg";
import image2 from "../../../../public/images/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger.jpg";
import "../../../app/style/swiper.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import { useState } from "react";

export default function MainSlider() {
  const slides = [
    {
      _id: 1,
      image: image,
      subtitle: "PC GAMING CASES",
      title: "Sale up to 50% off",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      button: "Buy Now",
      slug: "/shop",
    },
    {
      _id: 2,
      image: image2,
      subtitle: "TRENDY GRAPHIC TEES",
      title: "New Arrivals 2025",
      description: "Discover stylish and comfortable new t-shirt collections.",
      button: "Shop Now",
      slug: "/shop",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      loop={true}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "fraction",
        el: ".swiper-pagination",
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper relative"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="h-full w-full relative">
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover rounded-2xl"
            priority
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 z-[5] bg-gradient-to-r from-white/80 via-white/30 to-transparent" />

          {/* animated overlay text */}
          {activeIndex === index && (
            <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 z-10 max-w-xl space-y-3">
              {/* Subtitle: fade + slide left */}
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-xs sm:text-sm font-semibold text-neutral-700"
              >
                {slide.subtitle}
              </motion.p>

              {/* Title: scale + fade */}
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="text-2xl sm:text-4xl font-extrabold text-chart-1 uppercase"
              >
                {slide.title}
              </motion.h2>

              {/* Description: slide from bottom */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-neutral-700"
              >
                {slide.description}
              </motion.p>

              {/* Button: pop/scale with bounce */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 300,
                }}
                className="px-5 font-medium py-2 cursor-pointer bg-chart-1 text-white rounded-md shadow"
              >
                {slide.button}
              </motion.button>
            </div>
          )}
        </SwiperSlide>
      ))}

      {/* Custom nav pill */}
      <div className="custom-nav absolute bottom-5 right-5 flex items-center gap-3 text-neutral-800 px-12 py-2 rounded-full shadow-lg">
        <div className="swiper-button-prev flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl cursor-pointer hover:bg-white/30 transition-all duration-300">
          <span className="text-lg font-bold">&#10094;</span>
        </div>
        <div className="swiper-pagination px-2 py-1 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow  text-sm tabular-nums"></div>
        <div className="swiper-button-next flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/10 shadow-xl cursor-pointer hover:bg-white/30 transition-all duration-300">
          <span className="text-lg font-bold">&#10095;</span>
        </div>
      </div>
    </Swiper>
  );
}
