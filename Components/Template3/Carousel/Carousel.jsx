"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderInitialized, setSliderInitialized] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false, // Disable auto loop
    slides: {
      perView: 1, // Show one slide at a time
      spacing: 10, // Space between slides
    },
    created() {
      setSliderInitialized(true); // Set initialized to true when the slider is created
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative  w-full lg:w-[454px] max-w-2xl mx-auto">
      <div ref={sliderRef} className="keen-slider">
    
      <div className="keen-slider__slide p-[0] w-full flex items-center justify-center">
          <Image
            className="lg:w-[454px]  w-full lg:h-[421.8470153808594px]"
            src={'/assets/template1/6.png'}
            width={1000}
            height={1000}
            alt="carosel_img"
          />
        </div>
        <div className="keen-slider__slide p-[0] w-full flex items-center justify-center">
          <Image
            className="lg:w-[454px]  w-full lg:h-[421.8470153808594px]"
            src={'/assets/template1/6.png'}
            width={1000}
            height={1000}
            alt="carosel_img"
          />
        </div>
        <div className="keen-slider__slide p-[0] w-full flex items-center justify-center">
          <Image
            className="lg:w-[454px]  w-full lg:h-[421.8470153808594px]"
            src={'/assets/template1/6.png'}
            width={1000}
            height={1000}
            alt="carosel_img"
          />
        </div>
      </div>

      {sliderInitialized && (
        <div className="absolute bg-[#36B894] rounded-[37.3px] p-2.5 px-7 -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {Array.from({ length: instanceRef.current?.track.details.slides.length || 0 }).map(
            (_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-[12.86px] cursor-pointer h-[12.86px] rounded-full transition-all ${
                  currentSlide === idx ? "bg-[#412820] scale-125" : "bg-[#FFFFFF]"
                }`}
              ></button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Carousel;