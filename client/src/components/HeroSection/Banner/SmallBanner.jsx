import RippleButton from "@/components/ui/RippleButton";
import Image from "next/image";

export function SmallBanner({
  image,
  subtitle,
  title,
  description,
  buttonText,
  buttonLink = "#",
}) {
  return (
    <div className="relative rounded-xl overflow-hidden group h-full w-full">
      {/* Background Image */}
      <Image src={image} alt={title} className="object-cover h-full w-full rounded-xl" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-xl" />

      {/* Always visible text */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-center space-y-1 px-2">
        <p className="text-[10px] sm:text-xs font-semibold text-white/80 tracking-wide">
          {subtitle}
        </p>
        <h2 className="text-sm sm:text-base font-bold text-chart-1 uppercase drop-shadow">
          {title}
        </h2>
        <p className="text-[10px] sm:text-xs text-white/70">{description}</p>
      </div>

      {/* Hover overlay with blur, text + button sliding from bottom */}
      <div className="absolute bottom-0 left-0 w-full h-full z-30 flex items-end justify-center">
        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 w-full flex flex-col items-center">
          {/* Full-width blur background */}
          <div className="w-full bg-black/20 backdrop-blur-md flex flex-col items-center space-y-3 py-4">
            {/* Inner content with padding */}
            <div className="px-4 flex flex-col items-center space-y-2">
              <p className="text-[10px] sm:text-xs font-semibold group-hover:text-gray-400 text-white/80 tracking-wide">
                {subtitle}
              </p>
              <h2 className="text-sm sm:text-base font-bold text-chart-1 uppercase drop-shadow">
                {title}
              </h2>
              <p className="text-[10px] sm:text-xs text-white/70 text-center">
                {description}
              </p>
              <a href={buttonLink}>
                <RippleButton className="px-4 py-1 bg-chart-1 text-black rounded-md font-medium shadow hover:bg-gray-200 transition text-xs sm:text-sm">
                  {buttonText}
                </RippleButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
