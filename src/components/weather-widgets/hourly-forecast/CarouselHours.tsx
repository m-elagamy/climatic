"use client";

import { useCallback, useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import HourCard from "./HourCard";
import type { HourData } from "@/types/WeatherFlags";
import ScrollBarProgress from "./ScrollBarProgress";
import HourCardSkeleton from "@/components/ui/loading-indicators/HourCardSkeleton";
import useUnitsContext from "@/hooks/useUnitsContext";

const CarouselHours = ({ hoursToDisplay }: { hoursToDisplay: HourData[] }) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [visibleHours, setVisibleHours] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { isLoading } = useUnitsContext();

  const updateSlidesInView = useCallback((api: CarouselApi) => {
    if (!api) return;

    setVisibleHours(api.slidesInView());
    setScrollProgress(api.scrollProgress());
  }, []);

  useEffect(() => {
    if (!api) return;

    updateSlidesInView(api);
    api.on("slidesInView", updateSlidesInView);

    return () => {
      api.off("slidesInView", updateSlidesInView);
    };
  }, [api, updateSlidesInView]);

  return (
    <>
      {isLoading && (
        <div className="flex 2xl:w-[560.04px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`basis-1/3 lg:basis-1/4 2xl:basis-1/5 ${index === 4 ? "hidden 2xl:block" : ""}`}
            >
              <HourCardSkeleton />
            </div>
          ))}
        </div>
      )}
      {!isLoading && (
        <>
          <Carousel
            className="min-h-[112px] cursor-grab active:cursor-grabbing md:min-h-[116px] 2xl:w-[560.04px]"
            setApi={setApi}
            opts={{ align: "start" }}
          >
            <CarouselContent>
              {hoursToDisplay?.map((hour, index) => (
                <CarouselItem
                  key={hour.time}
                  className="basis-1/3 lg:basis-1/4 2xl:basis-1/5"
                >
                  {visibleHours.includes(index) && <HourCard hour={hour} />}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <ScrollBarProgress scrollProgress={scrollProgress} />
        </>
      )}
    </>
  );
};

export default CarouselHours;
