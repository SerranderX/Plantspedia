import React from 'react';
import Link from 'next/link';
import { PlantCollection } from '@components/PlantCollection';
import { Typography } from '@material-ui/core';

type PostsPreviewProps = {
    plants: Plant[]
}

export const PostsPreview:React.FC<PostsPreviewProps> = ({ plants }) => {
    return (
        <div className="mt-6">
            <Typography variant="h3" component="h3" className="mt-2 mb-1">
                Recent Posts
            </Typography>
            <div className="border-solid border-t-4 border-purple-300 pt-4">
                <PlantCollection plants={plants} variant={'square'}/>
                <div className="text-right px-8 h-full flex justify-center sm:justify-end mb-4">
                    <Link href={`/posts`}>
                        <a title={`See all Posts`} className="rounded-lg py-2 px-4 bg-purple-800 text-gray-100">
                        <Typography variant="button" display="block" gutterBottom className="text-xl mb-0">
                            See all Posts
                        </Typography>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};