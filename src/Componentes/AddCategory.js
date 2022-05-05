import { useState } from "react";
import  PropTypes  from "prop-types";

const AddCategory = ( { setCategories }) => {
    
    const [inputVal, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       

        if (inputVal.trim().length > 2) {
            setCategories( cate => [ inputVal , ...cate ] );
            setInputValue('');
        }
    }


    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputVal }
                onChange = { handleInputChange }
            />
        </ form>

      );
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
 
export default AddCategory;