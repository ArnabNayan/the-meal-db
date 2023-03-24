import React from 'react';
import './Category.css'
const Category = (props) => {
     const { strCategoryThumb,idCategory,strCategory,strCategoryDescription}=props.category
    return (
        <div className="category-container">
            <img src={ strCategoryThumb} alt="" />
           <h4>ID:{idCategory}</h4>
           <h2>Food:{strCategory}</h2>
           <p>{strCategoryDescription}</p>
        </div>
    );
};

export default Category;