"use client";
import Image from "next/image";
import image from "../../../../public/images/9657270.jpg";
import image2 from "../../../../public/images/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger.jpg";
import "swiper/css";
import "../../../app/style/swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MainSlider() {
  return (
    <Swiper
      loop
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        type: "fraction",
        el: ".swiper-pagination",
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper">
      {[image, image2].map((img, index) => (
        <SwiperSlide key={index} className="h-full w-full">
          {/* <div className="relative h-full w-full overflow-hidden rounded-xl"> */}
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority
          />

          {/* optional: light gradient so text is readable */}
          <div className="absolute inset-0 z-[5] bg-gradient-to-r from-white/80 via-white/30 to-transparent" />

          {/* overlay text */}
          <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 z-10 max-w-xl space-y-3">
            <p className="text-xs sm:text-sm font-semibold text-neutral-700">
              PC GAMING CASES
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 uppercase">
              Sale up to 50% off
            </h2>
            <p className="text-neutral-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <button className="px-6 py-3 bg-black text-white rounded-md shadow">
              Buy now
            </button>
          </div>
          {/* </div> */}
        </SwiperSlide>
      ))}

      {/* Custom nav pill */}
      <div className="custom-nav absolute bottom-5 right-5 flex items-center gap-3 bg-white/95 text-neutral-800 px-12 py-2 rounded-full shadow-lg">
        <div className="swiper-button-prev cursor-pointer select-none">
          Left
        </div>
        <div className="swiper-pagination text-sm tabular-nums"></div>
        <div className="swiper-button-next cursor-pointer select-none">
          Next
        </div>
      </div>
    </Swiper>
  );
}
