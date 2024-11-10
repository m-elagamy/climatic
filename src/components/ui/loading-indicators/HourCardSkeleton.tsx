import { Skeleton } from "./skeleton";

const HourCardSkeleton = () => (
  <div className="flex flex-col items-center justify-center gap-4">
    <Skeleton className="h-3 w-12 rounded-md" />
    <Skeleton className="size-7 rounded-full" />
    <Skeleton className="h-4 w-8 rounded-md" />
    <Skeleton className="h-3 w-12 rounded-md" />
  </div>
);

export default HourCardSkeleton;
