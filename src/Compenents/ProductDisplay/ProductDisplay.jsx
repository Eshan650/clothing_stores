import React, { useContext } from 'react'
import './ProductDisplay.css'
import stat_icon from '../Assets/star_icon.png'
import star_dull_icon from "../Assets/star_dull_icon.png"

const ProductDisplay = (props) => {
    const {product} = props
    
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={stat_icon} alt="" />
                <img src={stat_icon} alt="" />
                <img src={stat_icon} alt="" />
                <img src={stat_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias neque aspernatur, officiis eaque impedit laborum amet ipsam molestiae, doloribus minus iusto quas. Alias optio officia eos corrupti! Magni, excepturi exercitationem?
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span>{product.category} , T-Shirt</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay