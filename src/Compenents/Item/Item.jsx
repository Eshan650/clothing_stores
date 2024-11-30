import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  // const navigation = useNavigate()

  // const pressNAvigation = () => {
  //   navigation(`/product/${props.id}`)
  // }

  
  return (
    <Link to={`/product/${props.id}`}>
    {window.scrollTo(0,0)}
    <div className='item'>
      <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="iem-price-new">
                ${props.new_price}
            </div>
            <div className="item-price_old">
                ${props.old_price}
            </div>
        </div>
    </div>

</Link>
  )
}

export default Item

// onclick={window.scrollTo(0,0)}