import { useState } from "react";
import AddCategory from "./Componentes/AddCategory";
import GifGrid from "./Componentes/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Universe'])
   

    //const handleAdd = () => {
      //  setCategories([...categories, "Atoms"]);
   // }

    return ( 
        <>
            <h2> GifSearchApp </h2>
            <AddCategory setCategories= { setCategories } />
            <hr />
           
            <ol>
                {
                categories.map( category => 
                    <GifGrid
                    key= { category } 
                    category={ category }
                     />           
                    )
                }
            </ol> 
        </>
       
     );
}
 
export default GifExpertApp;