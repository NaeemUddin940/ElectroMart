"use client";
import { Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import Categories from "./Categories";

export default function Navigation() {
  const { register, setValue, watch, handleSubmit } = useForm();
  const searchValue = watch("search");
  const handleClear = () => setValue("search", "");
  const onSearch = (data) => console.log("Search:", data.search);

  return (
    <div className="bg-chart-1 hidden md:block px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-1">
        <form
          onSubmit={handleSubmit(onSearch)}
          className="flex items-center bg-transparent shadow-lg w-[500px] lg:w-[550px] rounded-full"
        >
          {/* Categories Dropdown */}
          <Categories />

          {/* Search input */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search anything..."
              {...register("search")}
              className="w-full px-4 py-2 text-base rounded-r-full focus:outline-none placeholder-background text-black"
            />
            {searchValue && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-10 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 transition"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 transition"
            >
              <Search className="w-5 h-5 text-black" />
            </button>
          </div>
        </form>
      </div>

      {/* Tailwind animations */}
    </div>
  );
}
