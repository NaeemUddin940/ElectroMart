import image4 from "../../../../public/images/3-Tasten-Maus_Microsoft.jpg";
import image from "../../../../public/images/9657270.jpg";
import image2 from "../../../../public/images/9704568.jpg";
import image3 from "../../../../public/images/images.jpg";
import { MediumBanner } from "../Banner/MediumBanner";
import { SmallBanner } from "../Banner/SmallBanner";
import MainSlider from "./MainSlider";

export default function BigDevice() {
  return (
    <div className="md:grid md:grid-cols-12 hidden md:h-[530px] lg:h-full lg:aspect-[14/7] grid-rows-8 gap-2">
      <div className="col-span-8 row-span-5 rounded-xl ">
        <MainSlider />
      </div>

      {/* 📌 TOP RIGHT BANNER */}
      <MediumBanner
        image={image}
        subtitle="PC GAMING CASES"
        title="Sale up to 50% off"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
        btnText="Buy now"
        textPosition="right"
      />

      {/* 📌 MIDDLE RIGHT BANNER */}
      <MediumBanner
        image={image2}
        subtitle="PC GAMING CASES"
        title="Sale up to 50% off"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
        btnText="Buy now"
        textPosition="left"
      />

      {/* Gaming Keyboard Banner */}
      <div className="col-span-4 row-span-3">
        <SmallBanner
          image={image3}
          subtitle="PC GAMING CASES"
          title="Sale up to 50% off"
          description="Best Seller"
          buttonText="Buy Now"
          buttonLink="/products/keyboard"
        />
      </div>

      {/* Wireless Mouse SmallBanner */}
      <div className="col-span-4 row-span-3">
        <SmallBanner
          image={image4}
          subtitle="PC GAMING CASES"
          title="Sale up to 50% off"
          description="Limited Stock"
          buttonText="Shop"
          buttonLink="/products/mouse"
        />
      </div>
    </div>
  );
}
