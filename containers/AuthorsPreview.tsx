import { ImageContentfull } from '@components/ImageContentfull';
import { Typography } from '@material-ui/core';
import React from 'react';

type AuthorsPreviewProps = {
    authors: Author[]
}

export const AuthorsPreview: React.FC<AuthorsPreviewProps> = ({authors}) => {

    return (
        <div className="grid gap-x-1 grid-cols-4 pb-4 pt-2 border-solid border-t-4 border-purple-300 content-center">
            {authors.map(author => 
                <div key={author.id} className="w-20 xl:w-56 p-0 xl:p-3 justify-self-center mt-3 rounded-lg hover:bg-purple-400 opacity-90 hover:opacity-100 transition delay-50 duration-100 ease-in-out cursor-pointer">
                    <ImageContentfull src={author.photo.url} layout="responsive" width={86} className="rounded-lg shadow-xl" aspectRatio='4:3' fit="fill" />
                    <Typography variant="h4" component="h3" className="mt-2 mb-1">
                        {author.fullName}
                    </Typography>
                </div>
            )}
        </div>
    );
};