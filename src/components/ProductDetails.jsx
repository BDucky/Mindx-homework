import React from "react";
import '../assets/less/product-details.less'
import Rating from '@mui/material/Rating';
import { useParams } from "react-router-dom";


const ProductDetails = ({ item, onSelect }) => {
    const params = useParams()
    const { productId } = params

    const handleShowProduct = () => {
        onSelect()
    }
    return (
        <div className="product-details-container" onClick={handleShowProduct}>
            <div className="product-details">
                <div className="product-details-image">
                    <img src={item?.thumbnail} alt={item.title} />
                </div>
                <div className="product-details-info">
                    <div className="product-details-title" title={item.description}>{item.title}</div>
                    <div className="product-details-prices">
                        <del className="product-details-price-root">{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(item?.price)}</del>
                        <span className="product-details-price-pro">{new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(Math.floor(item?.price * (100 - item?.discountPercentage) / 100))}</span>
                    </div>
                    <Rating name="read-only" value={item.rating} readOnly precision={0.2} />
                    <div className="product-details-description">{item?.description}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails