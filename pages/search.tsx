import { useState, ChangeEventHandler, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'

import {
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from '@ui/FormField'
import { SearchIcon } from '@ui/icon/Search'
import { Typography } from '@ui/Typography'

import { Layout } from '@components/Layout'
import { PlantCollection } from '@components/PlantCollection'

import { searchPlants, QueryStatus } from '@api'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: await serverSideTranslations(locale!),
})

export default function Search() {
  const { t } = useTranslation(['page-search'])
  const [term, setTerm] = useState('')
  const [status, setStatus] = useState<QueryStatus>('idle')
  const [results, setResults] = useState<Plant[]>([])

  const searchTerm = useDebounce(term, 900);

  const updateTerm: ChangeEventHandler<HTMLInputElement> = (event) =>
    setTerm(event.currentTarget.value)

  const emptyResults = status === 'success' && results.length === 0

  useEffect(() => {
    if (searchTerm.trim().length < 1) {
      setStatus('idle')
      setResults([])
      return
    }

    setStatus('loading')

    searchPlants({
      term: searchTerm,
      limit: 10,
    }).then((data) => {
      setResults(data)
      setStatus('success')
    })
  }, [searchTerm])

  return (
    <Layout>
      <main className="pt-10 text-center">
        <div className="max-w-5xl mx-auto mb-6">
          <FormControl fullWidth className="" variant="outlined">
            <InputLabel htmlFor="search-term-field">{t('term')}</InputLabel>
            <OutlinedInput
              id="search-term-field"
              value={term}
              onChange={updateTerm}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              labelWidth={100}
            />
          </FormControl>
        </div>
        <div>
          {emptyResults ? (
            <Typography variant="body1">{t('notFound', { term })}</Typography>
          ) : null}
        </div>
        <div>
          {!emptyResults ? (
            <PlantCollection plants={results} variant="square" />
          ) : null}
        </div>
      </main>
    </Layout>
  )
}

function useDebounce<T>(value: T, wait:number = 0) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  console.log(value);
  console.log(wait);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(value)
    }, wait);

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [value])

  return debouncedValue
}