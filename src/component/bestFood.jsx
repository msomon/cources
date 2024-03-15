import React from 'react';

import Bestfood from '../assets/bestCource.jpg'

const BestFood = () => {
    return (
        <div className="hero bestfood min-h-screen bg-base-200 ">
        <div className=" hero-content flex-col lg:flex-row-reverse ">
          <img src={Bestfood} className=" sm:w-[300px] md:w-[500px] lg:w-[800px] h-[300px] lg:h-[400px] rounded-lg shadow-2xl p-2" alt='Good Food Img' />
          <div className='md:text-center'>
            <h1 className="text-lg font-bold">Who Are We </h1>
            <h1 className="text-2xl font-bold">We Are Providing Best Cources</h1>
            <p className="py-6 ">With web development skills, you can create dynamic and interactive websites and web applications. The demand for web developers is high, and mastering these technologies can lead to lucrative job opportunities or freelancing gigs.Mastering Python opens doors to various career opportunities in software development, data analysis, artificial intelligence, and web development. It's a versatile language with a vibrant community, making it easy to find resources and support.</p>
        
          </div>
        </div>
      </div>
    );
};

export default BestFood;