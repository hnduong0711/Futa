import React from 'react'
import BookingBox from '../components/user/BookingBox/BookingBox'

const Homepage = () => {
  return (
    <div className='px-50 py-10 relative'>
      <div className='flex flex-col pt-44'>
        <BookingBox />
      </div>
    </div>
  )
}

export default Homepage