import React from 'react'
import Food from './Food'
import Foods from '../foodsdata'
const Allfoods = () => {
  return (
    <div className='container'>
      <div className='row'>
        {Foods.map(food=>{
            return <div className='col-md-4'> 
                <div>
                  <Food food={food}/>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Allfoods
