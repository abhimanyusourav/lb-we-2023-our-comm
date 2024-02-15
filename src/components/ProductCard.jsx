import React from 'react'

const ProductCard = () => {
    const originalPrice = 7000;
    const discountInPercentage = 37;

  return (
    <div className='product-card'>
        <div className="product-img">
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/8/t/h/ut1000-steel-mtb-with-21-shimano-gear-and-installation-services-original-imagujw36fb6gany.jpeg?q=70" alt="" />
        </div>
        <div className="product-name">
            Urban Terrain Shimano Geared for Men
        </div>
        <div className="product-desc">
            21 Gear, Black
        </div>
        <div className="product-price">
            <span className="product-price-final">₹{originalPrice * ((100-discountInPercentage)/100)}</span>
            <span className="product-price-original">₹{originalPrice}</span>
            <span className="product-price-discount">{discountInPercentage}% off</span>
        </div>
    </div>
  )
}

export default ProductCard
