"use client";
import Image from "next/image";
import image from "../../../public/images/9657270.jpg";
import image2 from "../../../public/images/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger.jpg";
import "swiper/css";
import "../../app/style/swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroSection() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-2 px-2">
      {/* Hero Section For Large Device */}

      <div className="md:grid md:grid-cols-12 hidden md:h-[530px] lg:h-full lg:aspect-[14/7] grid-rows-9 gap-2">
        <div className="col-span-8 row-span-6 rounded-xl bg-red-300">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            pagination={pagination}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper h-full w-full">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-4 row-span-4 col-start-9 rounded-xl bg-blue-500">
          2
        </div>
        <div className="col-span-4 col-start-9 row-start-5 rounded-xl bg-green-500">
          3
        </div>
        <div className="col-span-4 row-span-4 col-start-9 row-start-6 rounded-xl bg-teal-500">
          4
        </div>
        <div className="col-span-4 row-span-3 row-start-7 rounded-xl bg-orange-500">
          5
        </div>
        <div className="col-span-4 row-span-3 col-start-5 row-start-7 rounded-xl bg-violet-500">
          6
        </div>
      </div>

      {/* Hero Section For Small Device */}

      <div className="h-screen md:hidden sm:h-[90vh] md:h-[80vh] lg:h-[70vh]">
        <div className="grid grid-cols-1 gap-4">
          <div className="aspect-video bg-blue-400">
            <Image
              className="h-full w-full"
              src={image2}
              alt="Description"
              objectFit="contain"
            />
          </div>
          <div className=" grid grid-cols-2 gap-4">
            {" "}
            <div className="aspect-[16/11] ">
              <Image
                className="h-full w-full"
                src={image}
                alt="Description"
                objectFit="contain"
              />
            </div>
            <div className="aspect-[16/11]">
              <Image
                className="h-full w-full"
                src={image}
                alt="Description"
                objectFit="contain"
              />
            </div>
            <div className="aspect-[16/11]">
              <Image
                className="h-full w-full"
                src={image}
                alt="Description"
                objectFit="contain"
              />
            </div>
            <div className="aspect-[16/11]">
              <Image
                className="h-full w-full"
                src={image}
                alt="Description"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
