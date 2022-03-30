/**
 * @typedef {Object} Props
 * @property {React.ReactNode | undefined} children
 */

/**
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function PageLayoutMain({ children }) {
  return <main className=" mt-24">{children}</main>;
}
