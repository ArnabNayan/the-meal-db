import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Categories.css'
const Categories = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setCategories(data.categories))
    },[])
    return (
        <div className="category">
            <h1>Welcome to the Resturent:{categories.length}</h1>
            {
                categories.map(category=>console.log(category))
            }
            {/* {
              categories.map(category=><Category img={category.strCategoryThumb} id={category.idCategory}></Category>)
            } */}
             <div className="categories">
            {
                categories.map(category=><Category category={category}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;
