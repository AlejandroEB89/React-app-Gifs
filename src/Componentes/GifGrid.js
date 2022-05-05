// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {

    const { data:img , loading} = useFetchGifs( category );

    
    return ( 
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p className="animate__animated animate__flash"> Cargando...</p> }
            <div className="card-grid">
            

                { img.map( imag => ( 
                    <GifGridItem 
                    key={ imag.id }
                    {...imag} />   //el op spread esta enviando el resto de propiedades que tiene el img como props al GifgridItem
                ) ) 
                }
            </div>
        </>
        
     );
}
 
export default GifGrid;