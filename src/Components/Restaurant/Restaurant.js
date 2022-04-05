import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import Spinner from '../Spinner/Spinner';

const Restaurant = () => {
    const [search , setSearch] = useState('')
    const [meals , setMeals] = useState([])
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals))
    //    .finally(()=> setLoading(false))
    setLoading(false)
    } , [search])

     const searchFood = (e)=>{
         setSearch(e.target.value)
     }
    return (
       <>
        {
            !meals.length ? <Spinner></Spinner> :
            <div className='bg-[#828282]'>
            <div>
                <h1 className='text-3xl font-mono font-bold text-gray-800 text-center pt-3'>Welcome to Anik's Restaurant..</h1>
            </div>
             <div className='text-center mt-5'>
                 
                 <input onChange={searchFood} className='ring-2 md:w-1/4 rounded-full py-2 my-2 text-xl px-3 text-center' type="search" name="" id="" placeholder='search your menu' />
             </div>
             <div className=' grid md:grid-cols-3 gap-10 m-10'>
                 {
                     meals.map(meal=> <Meals key={meal.idMeal} meal={meal}></Meals>)
                 }
             </div>
         </div>
        }
       
       </>
    );
};

export default Restaurant;