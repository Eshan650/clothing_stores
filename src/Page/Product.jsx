import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Beachcum from '../Compenents/Beachcum/Beachcum'
import ProductDisplay from '../Compenents/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Compenents/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Compenents/RelatedProducts/RelatedProducts'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Beachcum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product


