import { MessageCircleWarning } from "lucide-react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import ToolTip from "@/components/ui/tooltip";

const WarningMessage = ({ avgHumidity }: { avgHumidity: number }) => {
  return (
    <ToolTip
      tooltipTrigger={<InfoCircledIcon className="size-[17px] text-blue-700" />}
      tooltipContent={
        <>
          <MessageCircleWarning
            size={16}
            className="mr-1 inline-block text-orange-700"
          />
          Humidity levels may increase and reach {avgHumidity}%, which could
          make the air feel more damp. Stay hydrated!
        </>
      }
    />
  );
};
export default WarningMessage;
