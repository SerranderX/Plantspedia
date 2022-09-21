import { getPlantList } from '@api';
import { Layout } from '@components/Layout';
import { PlantCollection } from '@components/PlantCollection';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useEffect } from 'react';
import { PaginationHandler } from '@components/PaginationHandler';

type PostsProps = {
    plants: Plant[],
    totalPlants: number,
    cantidadPaginas: number,
}

const paginationCant = 10;

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
    const response = await getPlantList({ limit: paginationCant });
    const cantidadPaginas = Math.round(response.total / paginationCant);

    return {
        props: {
            plants: response.plants,
            totalPlants: response.total,
            cantidadPaginas: cantidadPaginas,
        },
        revalidate: 5 * 60 // 5 min
    }
}

export default function Posts({ plants, cantidadPaginas }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [plantsClient, setPlantsClient] = React.useState(plants);
    const [page, setPage] = React.useState(1);

    useEffect(() => {
        const getPlantsByPage = async () => {
            const cantToSkip = (page - 1) * paginationCant;

            const response = await getPlantList({ limit: paginationCant, skip: cantToSkip });
            setPlantsClient(response.plants);
        }

        if(page !== 1){
            getPlantsByPage();
        } else {
            setPlantsClient(plants);
        }
    }, [page]);

    const handleLeftButton = () => {
        if(page > 1){
            setPage(page - 1);
            scrollTo(0, 0);
        }
    }
    const handleRightButton = () => {
        if(page < cantidadPaginas){
            setPage(page + 1);
            scrollTo(0, 0);
        }
    }

    const goToPage = (page: number) => {
        setPage(page);
        scrollTo(0, 0);
    }

    return (
        <Layout>
            <section className='border-solid border-t-4 border-b-4 border-purple-300 pt-4'>
                <PlantCollection plants={plantsClient} variant={'vertical'} />
            </section>
            <PaginationHandler handleLeftButton={handleLeftButton} handleRightButton={handleRightButton} totalPages={cantidadPaginas} actualPage={page} goToPage={goToPage}/>
        </Layout>
    );
};