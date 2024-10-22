import { InfoCircledIcon } from "@radix-ui/react-icons";

import ToolTip from "@/components/ui/tooltip";

const WarningMessage = ({ avgHumidity }: { avgHumidity: number }) => {
  return (
    <ToolTip
      tooltipTrigger={
        <InfoCircledIcon className="size-[17px] text-sky-500 hover:text-sky-600" />
      }
      tooltipContent={
        <p>Humidity levels today may increase and reach {avgHumidity}%.</p>
      }
    />
  );
};
export default WarningMessage;
