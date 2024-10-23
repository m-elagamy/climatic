"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import HourCard from "./HourCard";
import type { HourData } from "@/types/WeatherFlags";

const CarouselHours = ({ hoursToDisplay }: { hoursToDisplay: HourData[] }) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const animationFrame = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (!api) return;

    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      setScrollProgress(api.scrollProgress());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    api.on("scroll", handleScroll);

    return () => {
      api.off("scroll", handleScroll);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [api, handleScroll]);

  const memoizedHoursToDisplay = useMemo(() => {
    return hoursToDisplay;
  }, [hoursToDisplay]);

  return (
    <>
      <Carousel
        className="min-h-[112px] cursor-grab active:cursor-grabbing"
        setApi={setApi}
        opts={{ align: "start" }}
      >
        <CarouselContent>
          {memoizedHoursToDisplay?.map((hour) => (
            <CarouselItem key={hour.time} className="basis-1/3 lg:basis-1/4">
              <HourCard hour={hour} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div
        className="absolute -left-full bottom-0 h-[2px] w-full rounded-sm bg-gradient-to-r from-slate-200/30 to-slate-400/50 transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${scrollProgress * 100}%,0,0)`,
        }}
      />
    </>
  );
};

export default CarouselHours;
