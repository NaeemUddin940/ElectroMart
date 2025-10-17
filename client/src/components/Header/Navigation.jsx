"use client";
import { Search, X } from "lucide-react";
import { useForm } from "react-hook-form";

export default function Navigation() {
  const { register, setValue, watch } = useForm();
  const searchValue = watch("search"); // track input value
  console.log(searchValue);
  const handleClear = () => {
    setValue("search", ""); // clear input
  };

  return (
    <div className="bg-chart-1">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-1">
        <div className="flex items-center bg-transparent shadow-lg border-1 w-[530px] rounded-full gap-4 px-3">
          <div className="whitespace-nowrap">All Categories</div>
          <div className="h-5 border-r-2 border-primary" />
          <div className="flex items-center justify-between w-full relative">
            <input
              type="text"
              placeholder="Search anything..."
              {...register("search")}
              className="flex-1 px-4 py-2  text-primary focus:outline-none placeholder-primary text-base rounded"
            />

            {/* Clear button */}
            {searchValue && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-6 top-1/2 -translate-y-1/2 hover:bg-input cursor-pointer p-1 rounded-full text-primary hover:text-gray-700">
                <X className="w-5 h-5 hover:text-primary" />
              </button>
            )}

            {/* Search button */}
            <button type="submit" className="ml-2">
              <Search className="w-5 h-5 cursor-pointer text-black" />
            </button>
          </div>
        </div>

        <div>free shipping over $199</div>
        <div>30 days money back</div>
        <div>100% secure payment</div>
      </div>
    </div>
  );
}
