import React from 'react'
import Products from "./Products"
export default function ProductList(props) {
    return (
        <>
                <div className="row">
                    {props.Products.map(ProductList=>
                        <div className="col-sm-3">
                            <Products ProductList = {ProductList} />
                        </div>
                    )}
                </div>
        </>
    )
}
