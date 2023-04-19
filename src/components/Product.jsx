

export default function Product({ item, onDelete, OnUpdate, onSelect }) {
   const handleRemoveProduct = (id) => {
      onDelete(id)
   }

   const handleSelectProduct = (id) => {
      onSelect(id)
   }
   return (
      <div className="product" >
         <img src={item?.thumbnail} alt={item.title} onClick={() => handleSelectProduct(item.id)} />
         <div className="info" onClick={() => handleSelectProduct(item.id)}>
            <div className="title" title={item.description}>{item.title}</div>
            <div className="prices">
               <del className="price-root">
                  {new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(item?.price)}
               </del>
               <span className="price-pro">
                  {new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' })
                     .format(Math.floor(item?.price * 100 / item?.discountPercentage))
                  }
               </span>
            </div>
         </div>
         <div className="options">
            <button className="btn delete" onClick={() => handleRemoveProduct(item.id)}>
               Remove product
            </button>
         </div>
      </div>
   )
}