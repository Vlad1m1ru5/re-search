/**
 * @typedef {Object} Props
 * @param {React.ReactNode | undefined} children
 */

/**
 * @param {Props} props
 * @returns {JSX.Element}
 */
export default function PageLayoutScreen({ children }) {
  return <div className="min-h-screen">{children}</div>;
}
