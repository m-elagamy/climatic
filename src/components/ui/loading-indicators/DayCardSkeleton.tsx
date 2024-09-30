import { Skeleton } from "./skeleton";

const DayCardSkeleton = () => {
  return (
    <>
      <Skeleton className="h-2 w-8" />

      <div className="flex flex-col items-center justify-center gap-[2px] text-xs">
        <Skeleton className="mb-1 h-4 w-4 rounded-full" />
        <Skeleton className="h-2 w-12" />
      </div>

      <div className="relative -top-1 h-[6px] w-1/3 rounded-md bg-card">
        <Skeleton className="h-full w-full" />

        <div className="flex items-center justify-between pt-1 text-xs font-bold">
          <Skeleton className="h-2 w-4" />
          <Skeleton className="h-2 w-4" />
        </div>
      </div>
    </>
  );
};

export default DayCardSkeleton;
