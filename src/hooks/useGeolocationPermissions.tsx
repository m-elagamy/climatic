import { useCallback, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useGeolocationPermissions = () => {
  const [isGeolocationDenied, setIsGeolocationDenied] = useLocalStorage(
    "is-geolocation-denied",
    true,
  );
  const syncGeolocationPermissionsWithLocalStorage = useCallback(() => {
    if (!navigator.permissions) {
      console.warn("Geolocation is not supported by this browser.");
      return;
    }

    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      result.onchange = () => {
        if (result.state === "denied") {
          setIsGeolocationDenied(true);
        } else {
          setIsGeolocationDenied(false);
        }
      };
    });
  }, [setIsGeolocationDenied]);

  useEffect(() => {
    syncGeolocationPermissionsWithLocalStorage();
  }, [syncGeolocationPermissionsWithLocalStorage]);

  return {
    isGeolocationDenied,
    setIsGeolocationDenied,
    syncGeolocationPermissionsWithLocalStorage,
  };
};
export default useGeolocationPermissions;
