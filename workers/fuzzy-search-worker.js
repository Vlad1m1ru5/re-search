import fuzzySearchConvertor from "~/convertors/fuzzy-search-convertor";
import fuzzySearchService from "~/services/fuzzy-search-service";

onmessage = ({ data }) => {
  const { type, payload } = data;
  if (type === "SET_COLLECTION") {
    postMessage({ type: "START_SET_COLLECTION" });
    import("~/data/search-index.json")
      .then((searchIndex) => searchIndex.default.entries)
      .then((entries) => fuzzySearchService.setCollection(entries))
      .then(() => postMessage({ type: "FINISH_SET_COLLECTION" }));
  } else if (type === "SEARCH") {
    postMessage({ type: "START_SEARCH" });
    const fuzzyResults = fuzzySearchService.search(String(payload));
    const items = fuzzySearchConvertor.getFuzzyResultsItems(fuzzyResults);
    postMessage({ type: "FINISH_SEARCH", payload: items });
  }
};
