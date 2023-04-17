import React, { useEffect, useState } from "react";
import Product from "@Components/Product";
import '../assets/less/products.less'
import '../assets/less/product.less'
import ProductDetails from "./ProductDetails";

function Products({ title, children }) {
   const [products, setProducts] = useState([])
   const [productSelected, setProductSelected] = useState()
   const [isSelected, setIsSelected] = useState(false)

   const onDeleteProduct = (id) => {
      console.log('onDelete:', id)
      setProducts(products.filter(product => product?.id !== id))
   }

   const onSelectProduct = (id) => {
      console.log('onSelect:', id)
      setProductSelected(products.find(product => product?.id === id))
      setIsSelected(true)
   }

   const onShowProducts = () => {
      setIsSelected(false)
   }

   useEffect(() => {
      fetch('https://dummyjson.com/products')
         .then(res => res.json())
         .then((r) => {
            setProducts(r?.products)
         });
   }, [])

   useEffect(() => {
      console.log('Products', products)
   }, [products])

   return (
      <>
         <h2>Products</h2>
         <div className="products" style={{display: isSelected ? "none" : ""}}>
            {products &&
               products.map(product => <Product item={product} key={product?.id} onDelete={onDeleteProduct} onSelect={onSelectProduct} />
               )
            }
         </div>
         <div className="product-details" style={{display: isSelected ? "block" : "none"}}>
            {productSelected && <ProductDetails item={productSelected} key={productSelected?.id} onSelect={onShowProducts}/>}
         </div>
      </>
   )
}
export default Products