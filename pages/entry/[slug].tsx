import { Layout } from '@components/Layout'
import { Typography } from '@ui/Typography'
import { Grid } from '@ui/Grid'
import { RichText } from '@components/RichText'
import { AuthorCard } from '@components/AuthorCard'
import {
  getCategoryList,
  getPlant,
  getPlantList,
  PlantsListResponse,
} from '@api'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PlantEntryInline } from '@components/PlantCollection'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

type PlantEntriesProps = {
  plant: Plant
  otherPosts: Plant[] | null
  categories: Category[] | null
}

type PathType = {
  params: {
    slug: string
  }
}

export const getStaticPaths = async () => {
  const plants: PlantsListResponse = await getPlantList({ limit: 10 })

  const paths: PathType[] = plants.plants.map((plant) => ({
    params: { slug: plant.slug },
  }))

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<PlantEntriesProps> = async ({
  params,
}) => {
  const slug = params?.slug

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    }
  }

  try {
    const plant = await getPlant(slug)
    const otherPosts = await getPlantList({ limit: 3 })
    const categories = await getCategoryList({ limit: 10 })

    return {
      props: {
        plant: plant,
        otherPosts: otherPosts.plants,
        categories,
      },
      revalidate: 5 * 60 // 5 min
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default function PlantEntryPage({
  plant,
  otherPosts,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const router = useRouter();

  return (
    <Layout>
      {plant && !router.isFallback && (
        <>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8} lg={9} component="article">
              <figure>
                <img />
              </figure>
              <div className="px-12 pt-8">
                <Typography variant="h2">{plant?.plantName}</Typography>
              </div>
              <div className="p-10">
                <RichText richText={plant.description} />
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={3} component="aside">
              <section className="border-solid border-t-4 border-purple-300 pt-4">
                <Typography variant="h5" component="h3" className="mb-4">
                  Recent Posts
                </Typography>
                {otherPosts?.map((plant) => (
                  <article key={plant.id} className="mb-3 mt-3">
                    <PlantEntryInline {...plant} />
                  </article>
                ))}
              </section>
              <section className="mt-10 border-solid border-t-4 border-b-4 border-purple-300 pt-4">
                <Typography variant="h5" component="h3" className="mb-4">
                  Categories
                </Typography>
                <ul className="list">
                  {categories?.map((categorie) => (
                    <li key={categorie.id}>
                      <Link href={`/category/${categorie.slug}`}>
                        <Typography component="a" variant="h6">
                          {categorie.title}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </Grid>
          </Grid>
          <section className="my-4 border-t-2 border-b-2 pt-12 pb-7 border-purple-300">
            <AuthorCard {...plant.author} />
          </section>
        </>
      )}
    </Layout>
  )
}
