import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setisLoading(false);
        setImages(newImages);
    }

    useEffect( () => {
        getImages();
    }, [ ]);

    return {
        images: [],
        isLoading: 400,
    }
}
