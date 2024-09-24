import { useEffect, useState } from "react";

const useUnitPreference = () => {
  const [isImperial, setIsImperial] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUnit = localStorage.getItem("unit");

    if (savedUnit) {
      setIsImperial(savedUnit === "imperial");
    }

    setIsLoading(false);
  }, []);

  const toggleUnitPreference = () => {
    const newUnit = !isImperial ? "imperial" : "metric";
    localStorage.setItem("unit", newUnit);
    setIsImperial((prev) => !prev);
  };

  return { isImperial, toggleUnitPreference, isLoading };
};

export default useUnitPreference;
