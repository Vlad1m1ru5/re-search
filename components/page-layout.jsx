import PageLayoutHead from "./page-layout-head";
import PageLayoutHeader from "./page-layout-header";
import PageLayoutMain from "./page-layout-main";
import PageLayoutScreen from "./page-layout-screen";

/**
 * @typedef {Object} Props
 * @property {React.ReactNode | undefined} children
 */

/**
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function PageLayout({ children }) {
  return (
    <PageLayoutScreen>
      <PageLayoutHead />
      <PageLayoutHeader />
      <PageLayoutMain>{children}</PageLayoutMain>
    </PageLayoutScreen>
  );
}
