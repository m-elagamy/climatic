import { InfoCircledIcon } from "@radix-ui/react-icons";

import ToolTip from "@/components/ui/tooltip";

const WarningMessage = ({ avgHumidity }: { avgHumidity: number }) => {
  return (
    <ToolTip
      tooltipTrigger={
        <InfoCircledIcon className="size-[17px] text-sky-500 hover:text-sky-600" />
      }
      tooltipContent={
        <p>
          Humidity levels may increase and reach {avgHumidity}%, which could
          make the air feel more damp. Stay hydrated!
        </p>
      }
    />
  );
};
export default WarningMessage;
