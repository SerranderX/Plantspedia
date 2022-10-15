import { memo } from 'react';
import Link from 'next/link'
import { Grid, GridProps } from '@ui/Grid'
import { Typography } from '@ui/Typography'
import { Button } from '@ui/Button'
import { Excerpt } from '@components/Excerpt'
import { ImageContentfull } from '@components/ImageContentfull'

type PlantCollectionProps = {
  plants: Plant[]
  variant?: 'square' | 'vertical'
  className?: string
}

export function PlantCollection({
  plants,
  variant,
  className,
}: PlantCollectionProps) {
  return (
    <Grid container component="ul" spacing={4} className={`${className} mb-4 `}>
      {plants.map((plant) => (
        <MemorizedPlantEntry key={plant.id} plant={plant} variant={variant} />
      ))}
    </Grid>
  )
}

type PlantEntryType = {
  plant: Plant
  variant?: 'square' | 'vertical'
}

const MemorizedPlantEntry = memo(PlantEntry, (prevProps, nextProps) => {
  return prevProps.plant.slug === nextProps.plant.slug
});

export function PlantEntry({ plant, variant = 'square' }: PlantEntryType) {
  let gridItemProps: GridProps = { xs: 6, md: 4 }
  let Component: (props: Plant) => JSX.Element = PlantEntrySquare

  if (variant === 'vertical') {
    Component = PlantEntryVertical
    gridItemProps = {
      xs: 12,
      sm: 6,
    }
  }

  return (
    <Grid key={plant.id} role="listitem" item {...gridItemProps}>
      <Component {...plant} />
    </Grid>
  )
}

export function PlantEntrySquare({ image, plantName, slug }: Plant) {
  return (
    <Link href={`/entry/${slug}`}>
      <a title={`Go to ${plantName}`}>
        <div className="opacity-90 hover:opacity-100 rounded-lg bg-green-100 min-h-full transition delay-100 duration-100 ease-in-out">
          <ImageContentfull layout="responsive" src={image.url} width={460} className="rounded-t-lg" aspectRatio='4:3' fit="fill" />
          <div className="p-4 min-h-full">
            <Typography variant="h4" className="break-words">
              {plantName}
            </Typography>
          </div>
        </div>
      </a>
    </Link>
  )
}

export function PlantEntryInline({
  image,
  plantName,
  slug,
  className,
}: Plant & { className?: string }) {
  return (
    <Link href={`/entry/${slug}`}>
      <a title={`Go to ${plantName}`}>
        <div
          className={`opacity-95 hover:opacity-100 flex items-end ${className}`} style={{alignItems: 'center'}}
        >
          <ImageContentfull src={image.url} width={84} fit="fill" aspectRatio='1:1' layout="intrinsic" className="rounded-t-lg rounded-b-lg" />
          <div className="pl-2 flex-auto" style={{maxWidth: '220px'}}>
            <Typography variant="h6" className="break-words">
              {plantName}
            </Typography>
          </div>
        </div>
      </a>
    </Link>
  )
}

export function PlantEntryVertical({
  image,
  plantName,
  description,
  slug,
}: Plant) {
  return (
    <div className={`opacity-90 hover:opacity-100 rounded-lg transition delay-100 duration-200 ease-in-out min-h-full bg-green-100`}>
      <Link href={`/entry/${slug}`}>
        <a title={`Go to ${plantName}`}>
          <ImageContentfull src={image.url} width={450} aspectRatio='4:3' layout="responsive" className="rounded-t-lg" fit="scale" />
          <Typography variant="h2" className="break-words pt-4 px-4">
            {plantName}
          </Typography>
        </a>
      </Link>
      <div className="px-4 pb-4">
        <Excerpt
          richText={description}
          color="textSecondary"
          className="py-6"
        />
        <Link href={`/entry/${slug}`} passHref>
          <Button>Read more</Button>
        </Link>
      </div>
    </div>
  )
}
