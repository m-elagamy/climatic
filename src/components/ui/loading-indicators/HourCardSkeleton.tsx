import { Skeleton } from "./skeleton";

const HourCardSkeleton = () => (
  <>
    <Skeleton className="h-2 w-12 rounded-md" />
    <Skeleton className="size-7 rounded-full" />
    <Skeleton className="h-4 w-8 rounded-md" />
    <Skeleton className="h-2 w-12 rounded-md" />
  </>
);

export default HourCardSkeleton;
