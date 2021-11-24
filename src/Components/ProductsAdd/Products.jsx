import React from 'react'

export default function Products(props) {
    return (
        <div>
             <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Product Name : {props.ProductList.productName}</h4>
                    <p className="card-text">Product Price : {props.ProductList.productPrice}</p>
                    <p className="card-text">Product Deiscription : {props.ProductList.productdiscription}</p>
                    <a href="#" className="btn btn-primary me-3">Delete</a>
                    <a href="#" className="btn btn-primary">Edit</a>
                </div>
            </div>
        </div>
    )
}
