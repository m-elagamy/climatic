import ToolTip from "@/components/ui/tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const GuidanceInfo = () => {
  return (
    <ToolTip
      tooltipTrigger={
        <InfoCircledIcon className="size-[17px] dark:text-blue-700" />
      }
      tooltipContent="This indicator represents the air quality index: right is bad, left is good. Stay safe and protect yourself accordingly!"
    />
  );
};
export default GuidanceInfo;
