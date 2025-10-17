"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useCallback } from "react";

const RippleButton = ({ children, className }) => {
  const buttonRef = useRef(null);

  const rippleStyles = `
        @keyframes ripple-animation {
            to {
                transform: scale(4); /* Scale up significantly */
                opacity: 0;
            }
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: var(--chart-1); /* Slightly stronger white ripple */
            transform: scale(0);
            pointer-events: none;
            animation: ripple-animation 0.6s linear;
        }
    `;
  const createRipple = useCallback((e) => {
    const button = buttonRef.current;
    if (!button) return;

    // 1. Get button dimensions and position
    const rect = button.getBoundingClientRect();

    // 2. Calculate click position relative to the button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 3. Create the ripple element
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    // 4. Determine the size of the ripple
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.width = ripple.style.height = `${size}px`;

    // 5. Position the ripple centered on the click point
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;

    // 6. Append the ripple and schedule removal
    button.appendChild(ripple);

    // Remove the ripple element after the animation is finished (0.6s)
    const animationDurationMs = 600;
    setTimeout(() => {
      ripple.remove();
    }, animationDurationMs);

    // Alternatively, use animationend event for purity (but requires more cleanup logic in React)
    // For simple one-shot animations, setTimeout is often cleaner when mixing DOM manipulation with React.
  }, []); // Empty dependency array means this function is created once

  return (
    <div>
      {/* Inline style block to inject the necessary animation CSS */}
      <style dangerouslySetInnerHTML={{ __html: rippleStyles }} />

      <button
        ref={buttonRef}
        onClick={createRipple}
        className={cn(
          "text-foreground font-semibold shadow-2xl tracking-wider transition duration-200 ease-in-out hover:bg-input/50 focus:outline-none focus:ring-input-90 focus:ring-opacity-70 relative overflow-hidden cursor-pointer transform hover:scale-[1.05] active:scale-[0.98]  select-none w-full max-w-sm",
          className
        )}
        aria-label="Activate with a ripple effect">
        <span className="relative z-10">{children}</span>
      </button>
    </div>
  );
};

export default RippleButton;
