import { Skeleton } from "./skeleton";

const DayCardSkeleton = () => {
  return (
    <>
      <Skeleton className="h-3 w-[56.3px]" />

      {/* Skeleton for Weather Icon and Condition */}
      <div className="flex flex-col items-center justify-center gap-[2px]">
        <Skeleton className="mb-1 h-6 w-6 rounded-full" /> {/* Icon */}
        <Skeleton className="h-3 w-[93px]" /> {/* Condition Text */}
      </div>

      {/* Skeleton for Max/Min Temperature and Rain Percentage */}
      <div className="w-[72.03px] space-y-3">
        <Skeleton className="h-3 w-16" /> {/* Max | Min Temperature */}
        <div className="flex items-center justify-center gap-1">
          <Skeleton className="h-4 w-4" /> {/* Umbrella Icon */}
          <Skeleton className="h-3 w-8" /> {/* Rain percentage */}
        </div>
      </div>
    </>
  );
};

export default DayCardSkeleton;
