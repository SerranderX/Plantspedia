import { ImageContentfull } from '@components/ImageContentfull';
import { Typography } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

type AuthorsPreviewProps = {
    authors: Author[]
}

export const AuthorsPreview: React.FC<AuthorsPreviewProps> = ({authors}) => {

    return (
        <>
            <Typography variant="h2" component="h2" className="mt-2 mb-1">
                Top authors
            </Typography>
            <div className="grid gap-x-1 grid-cols-2 sm:grid-cols-4 pb-4 pt-2 border-solid border-t-4 border-purple-300 content-center">
                {authors.map(author => {
                    return (
                        <div key={author.handle} className="justify-self-center">
                            <Link href={`/top-stories/${author.handle}`}>
                                <div key={author.id} className="w-36 xl:w-56 p-0 xl:p-3 justify-self-center mt-3 rounded-lg bg-purple-300 sm:bg-purple-100 hover:bg-purple-400 opacity-90 hover:opacity-100 transition delay-50 duration-100 ease-in-out cursor-pointer">
                                    <ImageContentfull src={author.photo.url} layout="responsive" width={86} className="rounded-lg shadow-xl" aspectRatio='4:3' fit="fill" />
                                    <Typography variant="h4" component="h3" className="mt-2 mb-1">
                                        {author.fullName}
                                    </Typography>
                                </div>
                            </Link>
                        </div>
                    )
                }
                )}
            </div>
            <div className="text-right px-8 h-full flex justify-center sm:justify-end mb-4">
                <Link href={`/top-stories`}>
                    <a title={`See top stories`} className="rounded-lg py-2 px-4 bg-purple-800 text-gray-100 text-2xl">
                        See top stories
                    </a>
                </Link>
            </div>
        </>
    );
};