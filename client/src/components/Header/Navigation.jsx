"use client";
import { ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { Collapse } from "react-collapse";
import { useEffect, useRef, useState } from "react";
import RippleButton from "../ui/RippleButton";

export default function Navigation() {
  const { register, setValue, watch } = useForm();
  const [categoryCollapse, setCategoryCollapse] = useState(false);
  const searchValue = watch("search"); // track input value

  const handleClear = () => setValue("search", "");

  // Ref to measure the content height for CSS transition
  const collapseRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Effect to measure the height of the content once the dropdown is open
  useEffect(() => {
    if (categoryCollapse && collapseRef.current) {
      // Set the height based on the scroll height (actual content height)
      setContentHeight(collapseRef.current.scrollHeight);
    } else if (!categoryCollapse) {
      // Reset height to 0 when collapsed
      setContentHeight(0);
    }
  }, [categoryCollapse]);

  // Data for the dropdown
  const categories = [
    "Electronics",
    "Clothing & Apparel",
    "Books & Media",
    "Home & Kitchen",
    "Health & Beauty",
  ];

  return (
    <div className="bg-chart-1 hidden md:block px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-1">
        <div className="flex items-center bg-transparent shadow-lg border-1 w-[500px] lg:w-[550px] rounded-full gap-4 pr-3">
          {/* Categories Collapse */}
          <div className="relative border-r border-gray-300">
            <button
              type="button"
              onClick={() => setCategoryCollapse(!categoryCollapse)}
              className="flex active:scale-120 duration-300 justify-between items-center cursor-pointer px-4 whitespace-nowrap py-2.5 font-medium text-gray-700 rounded-l-full"
              aria-expanded={categoryCollapse}>
              All Categories
              <ChevronDown
                className={`w-4 h-4 ${
                  categoryCollapse ? "rotate-180" : "rotate-0"
                } duration-500`}
              />
            </button>

            <div
              className={`absolute ${
                categoryCollapse ? "opacity-100" : "opacity-0"
              } left-0 mt-1 w-64 bg-background rounded-lg shadow-xl border border-gray-200 z-30 overflow-hidden transition-all duration-300 ease-in-out opacity-0`}
              style={{ height: `${contentHeight}px` }}>
              <div ref={collapseRef} className="p-1">
                <ul className="flex flex-col">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className="text-foreground px-3 py-2 text-sm rounded-md hover:bg-chart-1/20 hover:text-chart-2 cursor-pointer transition duration-150">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Search input */}
          <div className="flex items-center justify-between w-full relative">
            <input
              type="text"
              placeholder="Search anything..."
              {...register("search")}
              className="flex-1 px-4 py-2 text-primary focus:outline-none placeholder-primary text-base rounded"
            />

            {/* Clear button */}
            {searchValue && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-6 top-1/2 -translate-y-1/2 hover:bg-input cursor-pointer p-1 rounded-full text-primary">
                <X className="w-5 h-5" />
              </button>
            )}

            {/* Search button */}
            <button type="submit" className="ml-2">
              <Search className="w-5 h-5 cursor-pointer text-black" />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="hidden  text-[15px] lg:flex items-center gap-6 px-3">
          <div>free shipping over $199</div>
          <div>30 days money back</div>
          <div>100% secure payment</div>
        </div>
      </div>
    </div>
  );
}
