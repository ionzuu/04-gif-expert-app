import { getGifs }  from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category } ) => {

    const [ images, isLoading] = useFetchGifs( category );

    return (
    <>
        <h3>{ category }</h3>

        <ol>
            {
                images.map( ( image ) => {
                   <GifItem
                        key={ image.id }
                        { ...image }
                    />
                })
            }
        </ol>
    </>
    )
}
