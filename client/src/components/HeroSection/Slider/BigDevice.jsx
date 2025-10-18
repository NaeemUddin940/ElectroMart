import MainSlider from "./MainSlider";

export default function BigDevice() {
  return (
    <div className="md:grid md:grid-cols-12 hidden md:h-[530px] lg:h-full lg:aspect-[14/7] grid-rows-9 gap-2">
      <div className="col-span-8 row-span-6 rounded-xl bg-red-400">
        <MainSlider />
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
  );
}
