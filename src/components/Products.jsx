import React, { useEffect, useState } from "react";
import Product from "@Components/Product";
import '../assets/less/products.less'
import '../assets/less/product.less'
import ProductDetails from "./ProductDetails";
import Search from "./Search";

function Products({ title, children }) {
   const [products, setProducts] = useState([])
   const [productsSorted, setProductsSorted] = useState([])
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

   const onSearchProduct = (value) => {
      if (value) {
         setProductsSorted(products.filter(product => product?.title?.toLowerCase().includes(value.toLowerCase())))
      } else { setProductsSorted(products) }
   }

   useEffect(() => {
      fetch('https://dummyjson.com/products')
         .then(res => res.json())
         .then((r) => {
            setProducts(r?.products)
            setProductsSorted(r?.products)
         });
   }, [])

   useEffect(() => {
      console.log('Products', products)
   }, [products])

   return (
      <>
         <div className="search-product">
            <h2>Tìm sản phẩm</h2>
            <Search onSearching={onSearchProduct} placeholder={'Nhập tên sản phẩm'} />
         </div>
         <p>số lượng: {products?.length || 0}</p>
         <h2>Products</h2>
         <div className="products" style={{ display: isSelected ? "none" : "" }}>
            {productsSorted &&
               productsSorted.map(product => <Product item={product} key={product?.id} onDelete={onDeleteProduct} onSelect={onSelectProduct} />
               )
            }
         </div>
         <div className="product-details" style={{ display: isSelected ? "block" : "none" }}>
            {productSelected && <ProductDetails item={productSelected} key={productSelected?.id} onSelect={onShowProducts} />}
         </div>
      </>
   )
}
export default Products