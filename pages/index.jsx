import PageLayout from "~/components/page-layout";
import SearchForm from "~/components/search-form";

/** @type {import("next").NextPage} */
export default function Home() {
  return (
    <PageLayout>
      <SearchForm />
    </PageLayout>
  );
}
