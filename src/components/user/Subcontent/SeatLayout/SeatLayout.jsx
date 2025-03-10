import React from 'react'

const SeatLayout = ({numCar, floor, typeCar}) => {
  return (
    <div className='grid grid-cols-3 grid-rows-12'>
        {Array.from({length: 36}, (_, i) => {
          return (
            <div className='border border-black' key={i}>
              {i}
            </div>
          )
        })}
    </div>
  )
}

export default SeatLayout