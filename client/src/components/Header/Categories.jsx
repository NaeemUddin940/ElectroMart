"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Categories() {
  const categories = [
    {
      name: "Electronics",
      sub: [
        { name: "Computers", child: ["Laptops", "Desktops", "Components"] },
        { name: "Mobile Phones", child: ["Android", "iOS"] },
      ],
    },
    {
      name: "Clothing & Apparel",
      sub: [
        { name: "Men", child: ["Shirts", "Trousers"] },
        { name: "Women", child: ["Dresses", "Tops"] },
      ],
    },
    { name: "Books & Media" },
    { name: "Home & Kitchen" },
    { name: "Health & Beauty" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredParent, setHoveredParent] = useState(null);
  const [hoveredSub, setHoveredSub] = useState(null);

  return (
    <div
      className="relative border-r border-gray-300 rounded-l-full bg-chart-1 shadow-lg max-w-sm mx-auto"
      // Main container controls the entire dropdown visibility
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => {
        setDropdownOpen(false);
        setHoveredParent(null);
        setHoveredSub(null);
      }}
    >
      <button
        type="button"
        className="flex justify-between items-center px-4 py-3 font-semibold text-gray-700 w-full rounded-l-full cursor-pointer transition duration-300 bg-chart-1 hover:bg-chart-1/50"
      >
        All Categories
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            dropdownOpen ? "rotate-180 text-black" : "rotate-0 text-black"
          }`}
        />
      </button>

      {/* Main dropdown (Level 1) */}
      <ul
        className={`absolute -mt-1 w-64 bg-background rounded-lg shadow-2xl border border-gray-100 z-30 transition-all duration-300 origin-top transform 
          ${
            dropdownOpen
              ? "opacity-100 scale-100 pointer-events-auto translate-y-1"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        {categories.map((cat, i) => (
          <li
            key={i}
            className="relative px-4 py-3 text-sm cursor-pointer flex justify-between items-center hover:bg-chart-1/20 hover:text-chart-1 transition-colors"
            onMouseEnter={() => {
              setHoveredParent(i);
              setHoveredSub(null); // Clear sub-state when moving parent
            }}
            onMouseLeave={() => setHoveredParent(null)} // Keep this to allow parent switching
          >
            {cat.name}
            {cat.sub && <ChevronDown className="w-3 h-3 rotate-270" />}

            {/* Sub dropdown (Level 2) */}
            {cat.sub && hoveredParent === i && (
              <ul
                className="absolute left-full top-0 w-56 bg-background border border-gray-200 rounded-lg shadow-xl z-40 p-1
                 transition-all duration-200 transform pointer-events-auto animate-slide-in"
                // No need for onMouseLeave here, as the parent li handles the closure when switching parents
              >
                {cat.sub.map((subCat, j) => (
                  <li
                    key={j}
                    className="relative px-3 py-2 text-sm cursor-pointer flex justify-between items-center rounded-md hover:bg-chart-1/20 hover:text-chart-1"
                    onMouseEnter={() => setHoveredSub(j)}
                    // Removed onMouseLeave here to fix the issue:
                    // The menu will now only close when the mouse enters a new sub-category or the main dropdown closes.
                  >
                    {subCat.name}
                    {subCat.child && (
                      <ChevronDown className="w-3 h-3 ml-2 rotate-270" />
                    )}

                    {/* Child dropdown (Level 3) */}
                    {subCat.child &&
                      hoveredSub === j &&
                      hoveredParent === i && (
                        <ul
                          className="absolute left-full top-0 w-48 bg-background border border-gray-300 rounded-lg shadow-xl z-50 p-1
                           transition-all duration-200 transform pointer-events-auto animate-slide-in"
                          // No onMouseLeave needed here either
                        >
                          {subCat.child.map((child, k) => (
                            <li
                              key={k}
                              className="px-3 py-2 text-sm font-medium cursor-pointer rounded-md hover:bg-chart-1/20 hover:text-chart-1"
                            >
                              {child}
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Bruker nå standard <style> i stedet for <style jsx> for å unngå React-advarselen */}
      <style>{`
        /* Custom rotation for right-pointing chevron */
        .rotate-270 {
            transform: rotate(-90deg);
        }
        
        @keyframes slide-in {
          0% {
            transform: translateX(-5px) translateY(-5px);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.2s forwards;
        }
      `}</style>
    </div>
  );
}
