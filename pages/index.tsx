import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Layout } from '@components/Layout'
import { getPlantList } from '@api'
import { PostsPreview } from '@containers/PostsPreview'

type HomeProps = {
    plants: Plant[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const response = await getPlantList({ limit: 6 });

    return {
        props: {
            plants: response.plants,
        },
        revalidate: 5 * 60 // 5 min
    }
}

export default function Home({ plants }: InferGetStaticPropsType<typeof getStaticProps>) {

  return <Layout>
    <PostsPreview plants={plants} />
  </Layout>
}
