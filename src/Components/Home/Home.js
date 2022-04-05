import React from 'react';

const Home = () => {
    return (
        <div className='bg-gray-300'>
            <h2 className='text-3xl font-sans font-bold text-center pt-3'> Support</h2>
            <p className='text-center text-1xl font-serif m-10 font-bold'>The API and site will always remain free at point of access. If you love our service and want extra features you can sign up as a Paypal supporter for $2.
                You can cancel anytime. This allows us to pay for the servers and bandwidth and develop new features.
            </p>
            <div className='text-center text-1xl font-serif m-10 font-bold'>
                <h1 className='mb-4'> Test API Keys</h1>
                <p> Test API Keys
                    You can use the test API key "1" during development of your app or for educational use(see test links below)
                    However you must become a supporter if releasing publicly on an appstore.
                    The test key may be revoked at any time if abused.
                </p>
                <div className='text-center text-1xl font-serif m-10 font-bold'>
                    <h1 className='mb-4'> API Production Key Upgrade</h1>
                    <p> API Production Key Upgrade
                        All supporters have access to the beta version of the API which allows mutiple ingredient filters.
                        You also get access to adding your own meals and images. You can also list the full database rather than limited to 100 items.
                        Please sign up on Paypal and we will email you the upgrade.
                    </p>
                </div>
                <div className='text-center text-1xl font-serif m-10 font-bold'>
                    <h1>Contact</h1>
                    <p> Email: thedatadb@gmail.com (please state if you are a Paypal Supporter)</p>
                </div>
                <div className='text-center text-1xl font-serif m-10 font-bold p-6 '>
                    <h1>API Methods using the developer test key '1' as the API key</h1>
                    
                       <p className='pt-3 font-thin '> Search meal by name</p>
                       <p className='pt-3 font-thin '> www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata</p>
                       <p className='pt-3 font-thin '> List all meals by first letter</p>
                       <p className='pt-3 font-thin '> www.themealdb.com/api/json/v1/1/search.php?f=a</p>
                       <p className='pt-3 font-thin '> Lookup full meal details by id</p>
                       <p className='pt-3 font-thin '> www.themealdb.com/api/json/v1/1/lookup.php?i=52772</p>
                        <p className='pt-3 font-thin '>Lookup a single random meal</p>
                       <p className='pt-3 font-thin '> www.themealdb.com/api/json/v1/1/random.php</p>
                       <p className='pt-3 font-thin '> Lookup a selection of 10 random meals (only available to $2+ Paypal supporters)</p>
                       <p className='pt-3 font-thin '> www.themealdb.com/api/json/v1/1/randomselection.php</p>
                       <p className='pt-3 font-thin '> List all meal categories</p>
                        <p className='pt-3 font-thin '>www.themealdb.com/api/json/v1/1/categories.php</p>
                        <p className='pt-3 font-thin '>Latest Meals (only available to $2+ Paypal supporters)</p>
                        <p className='pt-3 font-thin '>www.themealdb.com/api/json/v1/1/latest.php</p>
                        <p className='pt-3 font-thin '>List all Categories, Area, Ingredients</p>
                       <p className='pt-3 font-thin '> www.themealdb.com/api/json/v1/1/list.php?c=list</p>
                        

                    
                </div>
            </div>
        </div>
    );
};

export default Home;