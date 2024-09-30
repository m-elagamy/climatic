import { TriangleAlert } from "lucide-react";

const ErrorMessage = ({
  error,
  customMessage,
}: {
  error?: string;
  customMessage?: boolean;
}) => {
  return (
    <p className="text-sm text-orange-500">
      <TriangleAlert size={16} className="mr-1 inline-block" />
      {customMessage &&
        "Oops! We're having trouble fetching the latest sunrise and sunset data. Please try again later or check your internet connection."}

      {!customMessage &&
        `${error} data is currently unavailable. Please check back later or
          refresh the page.`}
    </p>
  );
};
export default ErrorMessage;
