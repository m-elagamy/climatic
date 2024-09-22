import { useEffect, useState } from "react";

const useUnitPreference = () => {
  const [isImperial, setIsImperial] = useState(false);

  useEffect(() => {
    const savedUnit = localStorage.getItem("unit");
    if (savedUnit) {
      setIsImperial(savedUnit === "imperial");
    }
  }, []);

  const toggleUnitPreference = () => {
    setIsImperial((prev) => {
      const newUnit = !prev ? "imperial" : "metric";
      localStorage.setItem("unit", newUnit);
      return !prev;
    });
  };

  return { isImperial, toggleUnitPreference };
};

export default useUnitPreference;
