import { useEffect, useRef, useState } from "react";

export default function useFuzzySearchWorker() {
  /** @type {React.MutableRefObject<Worker | null>} */
  const fsWorkerRef = useRef(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    /** @param {MessageEvent}  event */
    const logMessageType = ({ data }) => {
      const { type, payload } = data;
      if (type === "FINISH_SEARCH") setResults(payload);
    };

    fsWorkerRef.current = new Worker(
      new URL("~/workers/fuzzy-search-worker.js", import.meta.url)
    );

    fsWorkerRef.current.postMessage({ type: "SET_COLLECTION" });
    fsWorkerRef.current.addEventListener("message", logMessageType);

    return () => {
      fsWorkerRef.current.removeEventListener("message", logMessageType);
    };
  }, []);

  /** @param {string} value */
  const searchValue = (value) => {
    const query = value.trim().replace("<", "&lt;").replace(">", "&gt;");
    if (fsWorkerRef.current === null) return [];
    fsWorkerRef.current.postMessage({ type: "SEARCH", payload: query });
  };

  return { results, searchValue };
}
