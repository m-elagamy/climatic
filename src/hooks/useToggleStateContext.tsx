import { useContext } from "react";
import ToggleStateContext from "@/providers/ToggleStateProvider";

const useToggleStateContext = () => {
  const context = useContext(ToggleStateContext);

  if (!context) {
    throw new Error(
      "useToggleStateContext must be used within the ToggleStateProvider",
    );
  }

  return context;
};
export default useToggleStateContext;
