import { useState } from "react";
import AddCategory from "./Componentes/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Constelations', 'Universe', 'Planets'])
   

    //const handleAdd = () => {
      //  setCategories([...categories, "Atoms"]);
   // }

    return ( 
        <>
            <h2> Gif Expert App </h2>
            <AddCategory setCategories= { setCategories } />
            <hr />
           
            <ol>
                {categories.map( category => {
                    return <li key={category}> { category }</li>
                })}
            </ol> 
        </>
       
     );
}
 
export default GifExpertApp;