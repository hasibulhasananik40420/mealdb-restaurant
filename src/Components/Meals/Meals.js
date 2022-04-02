import { useNavigate } from 'react-router-dom';

const Meals = ({meal}) => {
    const navigate = useNavigate()
    return (
       
          <div className=' bg-white p-4 rounded-md '>
          <div>
              <img className='w-full h-[300px] rounded' src={meal.strMealThumb} alt="" />
          </div>
           <div className='ml-2'>
            <p> {meal.strMeal}</p>
            <p> {meal.strCategory}</p>
            <p>{Meals.strTags}</p>
            <p> {meal.strInstructions.slice(0,100)}</p>
            <div className=''>
            <p onClick={()=> navigate(`/meal/${meal.idMeal}`)} className='text-xl font-serif font-bold cursor-pointer '> see more...</p> 
            </div>
          </div>
      </div>
        
       
       
    );
};

export default Meals;