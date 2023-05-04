import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent() {
  const [rating, setRating] = useState(3);

  const handleRating = (rate) => {
    setRating(rate)
  }
  return (
    <div>
      <Rating onClick={handleRating} ratingValue={rating} />
    </div>
  )
}