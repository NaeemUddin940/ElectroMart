import RippleButton from "@/components/ui/RippleButton";
import Image from "next/image";

export const MediumBanner = ({
  image,
  title,
  subtitle,
  desc,
  btnText,
  textPosition = "left",
}) => {
  // alignment for wrapper
  const alignmentClasses =
    textPosition === "center"
      ? "left-1/2 -translate-x-1/2 text-center"
      : textPosition === "right"
      ? "right-6 text-right"
      : "left-6 text-left";

  return (
    <div className="col-span-4 row-span-4 col-start-9 relative rounded-xl overflow-hidden group">
      <Image
        src={image}
        alt="Banner"
        
        className="object-cover rounded-xl"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-xl" />

      {/* Text wrapper */}
      <div
        className={`absolute bottom-4 z-20 max-w-sm space-y-1 px-3 py-2 flex flex-col items-start transition-all duration-500 ${alignmentClasses}`}
      >
        {/* Blur background behind text */}
        <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 backdrop-blur-md transition-opacity duration-500 z-0" />

        {/* Actual text content */}
        <div className="relative z-10 flex flex-col space-y-1">
          <p className="text-[10px] sm:text-xs font-semibold text-white/80 tracking-wide">
            {subtitle}
          </p>
          <h2 className="text-sm sm:text-base font-extrabold text-chart-1 uppercase leading-tight drop-shadow">
            {title}
          </h2>
          <p className="text-[10px] sm:text-xs text-white/80">{desc}</p>
          <RippleButton className="px-4 py-1 text-xs sm:text-sm bg-chart-1 text-black rounded-md font-medium shadow hover:bg-gray-200 transition">
            {btnText}
          </RippleButton>
        </div>
      </div>
    </div>
  );
};
