class FuzzySearchConvertor {
  /** @param {import("fuse.js").default.FuseResult<any>[]} results */
  getFuzzyResultsItems(results) {
    // Ignore unexpected typeof `results`
    if (!Array.isArray(results)) return [];
    return results.filter((res) => !!res?.item).map(({ item }) => item);
  }
}

export default new FuzzySearchConvertor();
