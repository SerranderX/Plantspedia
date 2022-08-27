import React from 'react';
import Link from 'next/link';
import { PlantCollection } from '@components/PlantCollection';

type PostsPreviewProps = {
    plants: Plant[]
}

export const PostsPreview:React.FC<PostsPreviewProps> = ({ plants }) => {
    return (
        <div className="border-solid border-t-4 border-purple-300 pt-4">
            <PlantCollection plants={plants} variant={'square'} />
            <div className="text-right px-2 h-full flex justify-end mb-4">
                <Link href={`/posts`}>
                    <a title={`See all Posts`} className="rounded-lg py-2 px-4 bg-purple-800 text-gray-100 text-2xl">
                    See all Posts
                    </a>
                </Link>
            </div>
        </div>
    );
};