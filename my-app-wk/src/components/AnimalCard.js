import React, {useState} from 'react'

function AnimalCard({name, averAge, classification, origin, img}) {
    console.log('using AC')
    //(name, classificatio, origin, averAge, img)
  return (
    <div className='animalcard'>
        <h2>{name}</h2>
        <p>{classification}</p>
        <p>{origin}</p>
        <p>{averAge}</p>
        <img className='animalimg' src={img} alt="" />
        </div>
  )
}

export default AnimalCard