import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Layout } from '@components/Layout'
import { getPlantList, getAuthorList } from '@api'
import { PostsPreview } from '@containers/PostsPreview'
import { AuthorsPreview } from '@containers/AuthorsPreview'
import { Hero } from '@components/Hero'

type HomeProps = {
    plants: Plant[]
    authors: Author[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const responsePlants = await getPlantList({ limit: 6 });
    const responseAuthors = await getAuthorList({limit: 4});

    return {
        props: {
            plants: responsePlants.plants,
            authors: responseAuthors
        },
        revalidate: 5 * 60 // 5 min
    }
}

export default function Home({ plants, authors }: InferGetStaticPropsType<typeof getStaticProps>) {

  return <Layout>
    <Hero {...plants[0]} plantName={plants[0].plantName} slug={plants[0].slug} image={plants[0].image} className="mb-4"/>
    <AuthorsPreview authors={authors}/>
    <PostsPreview plants={plants} />
  </Layout>
}
