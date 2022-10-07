import React from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

export const LocaleSwitcher = () => {
  const { locale, asPath: currentPath } = useRouter()

  return (
    <>
      <Typography variant="h5" component="span" style={{marginRight: '.5em'}}>
        {locale === 'en-US' ? 'Lenguage:' : 'Lenguaje:'}
      </Typography>
      {' '}
      {locale === 'en-US' ? (
        <span style={{ cursor: 'default', padding: '0.5em 0', border: '1px #cbc7c7 solid', borderRadius: '2px' }}>
          <NextLink passHref href={currentPath} locale="es">
            <Link style={{padding: '0.2em 0.5em'}}>
              <Typography variant="h5" component="span">
                Es
              </Typography>
            </Link>
          </NextLink>
          <Link component="span" variant="h5" underline='none' style={{padding: '0.2em 0.5em', backgroundColor: '#cbc7c7'}}>
            En
          </Link>
        </span>
      ) : (
        <span style={{ cursor: 'default', padding: '0.5em 0', border: '1px #cbc7c7 solid', borderRadius: '2px' }}>
          <Link component="span" variant="h5" underline='none' style={{padding: '0.2em 0.5em', backgroundColor: '#cbc7c7'}}>
            Es
          </Link>
          <NextLink passHref href={currentPath} locale="en-US" >
            <Link style={{padding: '0.2em 0.5em'}}>
              <Typography variant="h5" component="span">
                En
              </Typography>
            </Link>
          </NextLink>
        </span>
      )}
    </>
  )
}
