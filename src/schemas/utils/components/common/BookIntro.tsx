import { useEffect, useState } from "react";

interface BookIntroProps {
  onFinish: () => void;
}

export function BookIntro({ onFinish }: BookIntroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => setIsOpen(true), 500);
    const zoomTimer = setTimeout(() => setIsZooming(true), 1800);
    // 3. Remove the intro completely from the DOM after the zoom finishes
    const finishTimer = setTimeout(() => {
      sessionStorage.setItem('tech-abc-intro-played', 'true'); // Save the flag
      onFinish(); // Tell App.tsx to hide the book
    }, 2800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(zoomTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-brand-surface transition-opacity duration-1000 ease-in-out ${
        isZooming ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`transition-transform duration-1000 ease-in-out ${
          isZooming ? "scale-[25]" : "scale-100"
        }`}
        style={{ perspective: "1500px" }}
      >
        <div
          className="relative w-64 h-80 md:w-72 md:h-96"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* --- UPDATED INSIDE PAGES --- */}
          <div className="absolute inset-0 bg-brand-background rounded-r-md shadow-inner border-l-[6px] border-brand-border flex items-center justify-center overflow-hidden">
            {/* Subtle page gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-surface to-brand-background"></div>

            {/* The Text inside the book */}
            <div
              className={`relative z-10 text-center px-6 transition-all duration-1000 ease-out ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-brand-text text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3 font-medium">
                Welcome to
              </p>
              <p className="text-brand-primary text-[20px] md:text-xl tracking-[0.3em] uppercase mb-3 font-xl">
                Tech ABC
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-heading leading-tight">
                Explore Your <br />
                <span className="text-brand-primary">Future</span>
              </h2>
              {/* Lime green accent line */}
              <div className="mt-4 w-10 h-1 bg-brand-accent mx-auto rounded-full"></div>
            </div>
          </div>
          {/* --- END UPDATED INSIDE PAGES --- */}

          {/* Front Cover */}
          <div
            className="absolute inset-0 bg-brand-primary rounded-r-md shadow-2xl flex flex-col items-center justify-center border-l-[6px] border-brand-primaryDark"
            style={{
              transformOrigin: "left center",
              transform: isOpen ? "rotateY(-160deg)" : "rotateY(0deg)",
              transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="absolute inset-4 border-2 border-brand-accent/30 rounded-sm pointer-events-none"></div>

            <div className="text-brand-accent font-heading font-bold text-7xl mb-4 drop-shadow-lg">
              T
            </div>
            <div className="text-white font-heading font-bold text-2xl tracking-[0.2em] drop-shadow-md">
              TECH ABC
            </div>
            <div className="mt-8 w-16 h-1 bg-brand-accent rounded-full"></div>

            <div className="absolute bottom-8 text-white/60 text-xs font-medium tracking-widest uppercase">
              Build Your Career
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
