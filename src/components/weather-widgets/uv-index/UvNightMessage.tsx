import { MessageCircleWarning } from "lucide-react";

const UVNightMessage = () => (
  <p className="text-muted-foreground">
    <MessageCircleWarning
      size={18}
      className="mr-1 inline-block text-blue-700"
    />
    The UV index is not measured at night since the sun is not shining. No UV
    exposure risk.
  </p>
);

export default UVNightMessage;
