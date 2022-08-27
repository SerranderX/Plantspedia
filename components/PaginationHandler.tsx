import React, { FC, useEffect } from 'react';
import { Button } from '@components/ButtonPaginate';

type PaginationHandler = {
    handleLeftButton: () => void;
    handleRightButton: () => void;
    goToPage: (page: number) => void;
    totalPages: number;
    actualPage: number;
}

export const PaginationHandler: FC<PaginationHandler> = ({handleLeftButton, handleRightButton, totalPages, actualPage, goToPage}) => {
    const [localActualPage, setLocalActualPage] = React.useState(actualPage);
    const [prevPage, setPrevPage] = React.useState({page: 0, exist: false});
    const [nextPage, setNextPage] = React.useState({page: 0, exist: false});

    useEffect(() => {
        setLocalActualPage(actualPage);

        if(actualPage === 1){
            setPrevPage({page: 0, exist: false});
            setNextPage({page: actualPage + 1, exist: true});
        } else if (actualPage === totalPages) {
            setPrevPage({page: actualPage - 1, exist: true});
            setNextPage({page: 0, exist: false});
        } else if (actualPage > 1 && actualPage < totalPages) {
            setNextPage({page: actualPage + 1, exist: true});
            setPrevPage({page: actualPage - 1, exist: true});
        }
    } , [actualPage]);


    return (
        <div className="inline-flex space-x-3 xl:py-4 xl:px-4 sm:px-2 py-2">
            <Button onClick={handleLeftButton} disabled={(actualPage === 1 ? true : false)} className="rounded-l">{'<'}</Button>
            {localActualPage > 2 && (
                <div className={"bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 xl:px-4 px-2 transition delay-100 duration-100 ease-in-out cursor-pointer"} onClick={() => goToPage(1)} >1</div>
            )}
            {localActualPage > 3 && (
                <div className={"bg-gray-200 text-gray-800 font-bold xl:px-4 px-2 py-2"}>...</div>
            )}
            {prevPage.exist && (
                <div className={"bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 xl:px-4 px-2 transition delay-100 duration-100 ease-in-out cursor-pointer"} onClick={() => goToPage(prevPage.page)} >{prevPage.page}</div>
            )}
            <div className={"bg-gray-300 text-gray-800 font-bold py-2 xl:px-4 px-2"}>{localActualPage}</div>
            {nextPage.exist && (
                <div className={"bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 xl:px-4 px-2 transition delay-100 duration-100 ease-in-out cursor-pointer"} onClick={() => goToPage(nextPage.page)} >{nextPage.page}</div>
            )}
            {localActualPage < totalPages - 2 && (
                <div className={"bg-gray-200 text-gray-800 font-bold xl:px-4 px-2 py-2"}>...</div>
            )}
            {localActualPage < totalPages - 1 && (
                <div className={"bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 xl:px-4 px-2 transition delay-100 duration-100 ease-in-out cursor-pointer"} onClick={() => goToPage(totalPages)} >{totalPages}</div>
            )}
            <Button onClick={handleRightButton} disabled={(actualPage === totalPages ? true : false)} className="rounded-r">{'>'}</Button>
        </div>
    );
};