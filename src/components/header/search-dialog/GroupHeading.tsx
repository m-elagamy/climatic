import { Lightbulb } from "lucide-react";

const GroupHeading = () => {
  return (
    <span className="flex items-center gap-1">
      <Lightbulb size={16} />
      Suggestions:
    </span>
  );
};
export default GroupHeading;
