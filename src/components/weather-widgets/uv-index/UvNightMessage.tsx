import { Moon, Info } from "lucide-react"; // Replace CheckCircle with Info for better clarity
import ToolTip from "@/components/ui/tooltip";

const UVNightMessage = () => (
  <>
    <h3>
      <ToolTip
        tooltipTrigger={
          <span className="group relative flex items-center">
            {/* Background Circle for Glow Effect in Dark Mode */}
            <span className="absolute -inset-1 rounded-full bg-blue-100 blur-lg transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:blur-2xl dark:bg-blue-700 dark:group-hover:scale-110 dark:group-hover:blur-2xl" />
            {/* Moon Icon with Hover Effect in Dark Mode */}
            <Moon
              size={28}
              className="relative z-10 text-blue-600 transition duration-300 ease-in-out group-hover:scale-110 dark:text-yellow-400"
            />
            {/* Info Icon instead of CheckCircle */}
            <Info
              size={18}
              className="absolute bottom-0 right-0 rounded-full bg-white text-green-500 shadow transition duration-300 ease-in-out group-hover:scale-110 dark:bg-gray-800 dark:text-green-400"
            />
          </span>
        }
        tooltipContent="No UV exposure risk at night."
      />
    </h3>
    <p className="">
      <span className="text-sm dark:text-gray-300">
        The UV index is not measured at night since the sun is not shining.
      </span>
    </p>
  </>
);

export default UVNightMessage;
