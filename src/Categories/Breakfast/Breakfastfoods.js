import React, { useState,useContext } from 'react'
import Foods from '../foodsdata'
import Breakfast from './Breakfast.js';
import { MyContext } from '../../MyContext';

const Breakfastfoods = () => {
    let {type}=useContext(MyContext);
    console.log(type);
    const breakfastfoods = Foods.filter(food => food.tag.toLowerCase() === type);
console.log(breakfastfoods);
  return (
    <div className='container'>
      <div className='row'>
        {breakfastfoods.map(food=>{
            return <div className='col-md-4'> 
                <div>
                  <Breakfast food={food} />
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Breakfastfoods
