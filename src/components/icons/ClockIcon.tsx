import {
  Clock1,
  Clock10,
  Clock11,
  Clock12,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
} from "lucide-react";

const ClockIcon = ({ currentHour }: { currentHour: number | undefined }) => {
  const Icon = (() => {
    switch (currentHour) {
      case 1:
        return Clock1;
      case 2:
        return Clock2;
      case 3:
        return Clock3;
      case 4:
        return Clock4;
      case 5:
        return Clock5;
      case 6:
        return Clock6;
      case 7:
        return Clock7;
      case 8:
        return Clock8;
      case 9:
        return Clock9;
      case 10:
        return Clock10;
      case 11:
        return Clock11;
      case 12:
      default:
        return Clock12;
    }
  })();

  return <Icon size={12} className="mr-1 inline-block" />;
};
export default ClockIcon;
