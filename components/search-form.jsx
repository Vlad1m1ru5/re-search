import { ms } from "~/configs/search-form-config";
import useDebounceMemo from "~/hooks/use-debounce-memo";
import useFuzzySearchWorker from "~/hooks/use-fuzzy-search-worker";

export default function SearchForm() {
  const { results, searchValue } = useFuzzySearchWorker();
  const debounceSearchValue = useDebounceMemo(searchValue, ms);

  return (
    <form className="flex justify-center">
      <label className="flex flex-col items-center gap-4 hover:cursor-pointer">
        <h1 className="text-6xl">Get docs</h1>
        <input
          type="search"
          name="search"
          className="text-base px-6 py-3 border rounded-full"
          onChange={(e) => debounceSearchValue(e.target.value)}
        />
        <ul>
          {results.map(({ url }) => (
            <li key={url}>{url}</li>
          ))}
        </ul>
      </label>
    </form>
  );
}
