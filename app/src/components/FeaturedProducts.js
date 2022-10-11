import React from 'react'
import { Outlet, Link } from 'react-router-dom';

function FeaturedProducts() {
  return (
    <div>
      <p>List of featured products</p>
      <nav>
        <Link to='featured-product-details'>Details</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default FeaturedProducts