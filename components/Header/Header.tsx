import { PropsWithChildren } from 'react'
import Link, { LinkProps } from 'next/link'
import { useTranslation } from 'next-i18next'
import { NavBar } from '@ui/NavBar'
import { Button } from '@ui/Button'

import { PreviewModeBanner } from './PreviewModeBanner'
import { TopArea } from './TopArea'

export function Header() {
  const { t } = useTranslation(['common'])

  return (
    <>
      <PreviewModeBanner />
      <div className="px-8 py-3">
        <TopArea />
      </div>
      <div className="mx-auto" style={{ maxWidth: '98%' }}>
        <NavBar title="🌿 Plantpedia - ⚠️ Under construction ⚠️">
          <div className="flex gap-x-3">
            <NavLink href="/top-stories">{t('topStories')}</NavLink>
            <NavLink href="/search">{t('search')}</NavLink>
          </div>
        </NavBar>
      </div>
    </>
  )
}

function NavLink({ children, ...linkProps }: PropsWithChildren<LinkProps>) {
  return (
    <Link {...linkProps} passHref>
      <Button color="inherit" variant="text" component="a" className='transition delay-100 duration-200 ease-in-out'>
        {children}
      </Button>
    </Link>
  )
}
