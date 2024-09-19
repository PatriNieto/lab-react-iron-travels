
import React from 'react'
import travelPlansData from "../data/travel-plans.json"


const TravelList = () => {
  return (
    <section>
      {
        travelPlansData.map((elem)=>{
          <div key={index}>
          <img src="" alt="" />
          <h3>{elem.name}</h3>
          <p></p>
          <p></p>
        </div>
        })
      }
   
    </section>
  )
}

export default TravelList