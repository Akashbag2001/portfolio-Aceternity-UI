/**
 * Templates re-mount on every navigation, so this CSS-only curtain replays:
 * two slanted panels split apart (one up, one down) while the page rises
 * into place. Being pure CSS, it runs even before hydration.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div aria-hidden="true" className="curtain no-print">
        <span className="curtain__panel curtain__panel--left" />
        <span className="curtain__panel curtain__panel--right" />
        <span className="curtain__label">Akash.</span>
      </div>
      <div className="page-enter">{children}</div>
    </>
  );
}
