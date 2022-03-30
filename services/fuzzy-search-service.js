import Fuse from "fuse.js";
import { options } from "~/configs/fuzzy-search-config";

class FuzzySearchService {
  /** @type {import("fuse.js").default} */
  #fuse;

  /**
   * @typedef {Object} Options
   * @property {string[]} keys
   */

  /** @type {Options} */
  #options;

  /** @param {Options} options */
  constructor(options) {
    this.#options = options;
  }

  /** @param {ReadonlyArray<unknown>} data */
  setCollection(data) {
    if (this.#fuse) this.#fuse.setCollection(data);
    else this.#fuse = new Fuse(data, this.#options);
    return this;
  }

  /** @param {string} query */
  search(query) {
    try {
      return this.#fuse.search(query);
    } catch {
      // Gracefully catch `this.#fuse === null || this.#fuse === undefined`
      // or unexpected `query` value
      return [];
    }
  }
}

export default new FuzzySearchService(options);
