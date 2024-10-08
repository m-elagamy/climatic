import { useCallback, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useGeolocationPermissions = () => {
  const [isGeolocationDenied, setIsGeolocationDenied] = useLocalStorage(
    "geolocation-permission-status",
  );
  const syncGeolocationPermissionsWithLocalStorage = useCallback(() => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        result.onchange = () => {
          if (result.state === "denied") {
            setIsGeolocationDenied(true);
          } else {
            setIsGeolocationDenied(false);
          }
        };
      });
    } else {
      console.warn("Geolocation is not supported by this browser.");
    }
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
