import React, {useState, useEffect} from "react"

const Products =  () =>{
    const [Product, setProduct] = useState([])

    useEffect (() => {
        fetch('https://fakerapi.it/api/v1/products?_quantity=50')
        .then(res => res.json())
        .then(data => setProduct(data.data))

    },[]);
    
    
    return( 

        <div>
            <h1 id="product-header">Products</h1>

            <div className="product">
            { Product ? Product?.map((product, idx) =>(
                <div className="product-card" key={idx}>
                    <h2>{product.name}</h2><br/>
                    <img src={product.image} alt=""/><br/>
                    <h3>{product.price}</h3>
                    {product.tax}
                    <br/>
                    {product.netprice}
                </div>
            )):null
            } 
            </div>
        </div>
    )
}

export default Products