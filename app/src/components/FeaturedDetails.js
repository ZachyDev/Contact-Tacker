import React from 'react'
import { useParams } from 'react-router-dom';

function FeaturedDetails() {
    const { prodId } = useParams();

  return (
    <div>
        <p>Featured product details for product { prodId } </p>
    </div>
  )
}

export default FeaturedDetails