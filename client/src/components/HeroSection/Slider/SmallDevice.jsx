import Image from "next/image";
import image from "../../../../public/images/9657270.jpg";
import MainSlider from "./MainSlider";

export default function SmallDevice() {
  return (
    <div>
      {/* Hero Section For Small Device */}
      <div className="md:hidden h-screen sm:h-[90vh]">
        <div className="grid grid-cols-1 gap-4">
          <div className="aspect-video relative overflow-hidden rounded-xl">
            <MainSlider />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[image, image, image, image].map((img, i) => (
              <div
                key={i}
                className="aspect-[16/11] relative overflow-hidden rounded-xl">
                <Image
                  src={img}
                  alt={`thumb-${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
