
import React from "react"
import { list } from "../Data"
const RecentCard = () => {
  return (
    <>
<div className='content grid3 mtop mt-5'>
{list.map((val, index) => {
const { cover, category, location, name, price, type } = val
return (
 <div className='box shadow' key={index}>
  <div className='img'>
      <img src={cover} alt='' style={{width:"400px"}}/>
</div>
<div className='text'>
  <div className='category'>
<span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", 
  color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
  <i className='fa fa-heart'></i>
  </div>
  <h4>{name}</h4>
<p>
<i className='fa fa-location-dot'></i> {location}
      </p>
   </div>
  <div className='butto'>
   <div>
<button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
  </div>
 <span>{type}</span>
    </div>
</div>
    )
    })}
  </div>
    </>
  )
}

export default RecentCard