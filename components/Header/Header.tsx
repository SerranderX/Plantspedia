import { NavBar } from '@ui/NavBar'
import { PreviewModeBanner } from '@components/PreviewModeBanner'

export function Header() {
  return (
    <>
      <PreviewModeBanner />
      <div className="mx-auto" style={{ maxWidth: '98%' }}>
        <NavBar title="🌿 Plantpedia - (This site is in construction)">
          <div>{/* NavLink items */}</div>
        </NavBar>
      </div>
    </>
  )
}
