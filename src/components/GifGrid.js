import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGrideItem } from './GifGrideItem';

export const GifGrid = ({ category }) => {
    
//    const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 clasName="animate__animated animate__pulse"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

        <div className="card-grid">     
            {
                 images.map( img => (
                    <GifGrideItem 
                        key= { img.id }
                        { ...img }
                    />
                ))
            }
                   
        </div>
        </>     
    )
}
