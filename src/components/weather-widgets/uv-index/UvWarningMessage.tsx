import { MessageCircleWarning } from "lucide-react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import ToolTip from "@/components/ui/tooltip";

const UvWarningMessage = ({ uvAlongDay }: { uvAlongDay: number }) => {
  return (
    <ToolTip
      tooltipTrigger={<InfoCircledIcon className="size-[17px] text-blue-700" />}
      tooltipContent={
        <>
          <MessageCircleWarning
            size={16}
            className="mr-1 inline-block text-orange-700"
          />
          The UV level is expected to reach {uvAlongDay.toFixed(1)} today, so
          don&apos;t forget to stay in shade.
        </>
      }
    />
  );
};
export default UvWarningMessage;
