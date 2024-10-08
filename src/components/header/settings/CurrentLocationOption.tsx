"use client";

import { LocateIcon } from "lucide-react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import useCurrentLocation from "@/hooks/useCurrentLocation";

const CurrentLocationOption = () => {
  const { getCurrentLocation } = useCurrentLocation();

  const handleSelect = () => getCurrentLocation();

  return (
    <DropdownMenuItem onClick={handleSelect} className="cursor-pointer">
      <div className="flex items-center space-x-1">
        <LocateIcon size={16} />
        <span>Your Location</span>
      </div>
    </DropdownMenuItem>
  );
};
export default CurrentLocationOption;
