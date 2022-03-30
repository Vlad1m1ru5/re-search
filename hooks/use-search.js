import { useEffect, useState } from "react";

export default function useSearch() {
  const [search, setSearch] = useState({
    query: "",
    timeout: 800,
    throttle: false,
  });

  /**
   * @param {string} rowQuery
   * @returns {void}
   */
  const setQuery = (rowQuery) => {
    if (search.throttle) return;
    const query = rowQuery.trim().replace("<", "&lt;").replace(">", "&gt;");
    setSearch((search) => ({ ...search, query, throttle: true }));
  };

  useEffect(() => {
    if (search.throttle) {
      setTimeout(
        setSearch((search) => ({ ...search, throttle: false })),
        search.timeout
      );
    }
  }, [search.timeout, search.throttle]);

  return { setQuery };
}
