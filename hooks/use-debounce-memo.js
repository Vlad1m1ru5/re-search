import debounce from "lodash.debounce";
import { useEffect, useMemo } from "react";

export default function useDebounceMemo(callback, ms = 1) {
  const debounceCallback = useMemo(
    () => debounce(callback, ms),
    [callback, ms]
  );

  useEffect(() => {
    return () => debounceCallback.cancel();
  }, [debounceCallback]);

  return debounceCallback;
}
