import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Meal = () => {
    const {id} =useParams()
    // console.log(id);
    const [details , setDetails] = useState({})
    // console.log(details);
    useEffect( ()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => setDetails(data.meals[0]))
    }, [id])

    return (
       <div className='w-full flex justify-center bg-[#828282]'>
            <div className=' rounded-md w-[500px] bg-white h-auto m-4 '>
           <div>
               <img className='rounded-md h-[400px] w-full p-4' src={details.strMealThumb} alt="" />
           </div>
           <div className='text-center p-4 '>
               <p> {details.strMeal}</p>
               <p> {details.strTags}</p>
               <p> {details.strIngredient2}</p>
               <p> {details.strInstructions}</p>
           </div>
        </div>
       </div>
    );
};

export default Meal;