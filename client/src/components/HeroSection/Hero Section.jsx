"use client";

import BigDevice from "./Slider/BigDevice";
import SmallDevice from "./Slider/SmallDevice";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-2 px-2">
      {/* Hero Section For Large Device */}
      <BigDevice />
      <SmallDevice />
    </div>
  );
}
