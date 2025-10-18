import Image from "next/image";
import image from "../../public/images/9657270.jpg";
import image2 from "../../public/images/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger.jpg";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-2 px-2">
      {/* Hero Section For Large Device */}

      <div className="md:grid md:grid-cols-12 hidden md:h-[530px] lg:h-full lg:aspect-[14/7] grid-rows-9 gap-2">
        <div className="col-span-8 row-span-6 rounded-xl bg-red-500">1</div>
        <div className="col-span-4 row-span-4 col-start-9 rounded-xl bg-blue-500">2</div>
        <div className="col-span-4 col-start-9 row-start-5 rounded-xl bg-green-500">3</div>
        <div className="col-span-4 row-span-4 col-start-9 row-start-6 rounded-xl bg-teal-500">4</div>
        <div className="col-span-4 row-span-3 row-start-7 rounded-xl bg-orange-500">5</div>
        <div className="col-span-4 row-span-3 col-start-5 row-start-7 rounded-xl bg-violet-500">6</div>
      </div>

      {/* <div className="hidden md:grid md:grid-cols-12 h-[550px] md:grid-rows-8 gap-4">
        <div className="md:col-span-8 md:row-span-5 bg-blue-200 p-4">1</div>
        <div className="md:col-span-4 md:row-span-4 md:col-start-9 bg-green-200 p-4">
          2
        </div>
        <div className="md:col-span-4 md:row-span-4 md:col-start-9 md:row-start-5 bg-yellow-200 p-4">
          3
        </div>
        <div className="md:col-span-4 md:row-span-3 md:row-start-6 bg-red-200 p-4">
          4
        </div>
        <div className="md:col-span-4 md:row-span-3 md:col-start-5 md:row-start-6 bg-purple-200 p-4">
          5
        </div>
      </div> */}

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
