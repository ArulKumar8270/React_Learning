import React,{useState} from 'react'

function ProductsAdd(props) {
    const [productName, setproductName] = useState("")
    const [productPrice, setproductPrice] = useState("")
    const [productdiscription, setproductdiscription] = useState("")
    return (
        <>
            <div className="addMenu">
                <input type="text" name="productName" placeholder="Product Name" id="name" value={productName} onChange={(text)=>{
                    setproductName(text.target.value);
                    console.log(setproductName);
                }}/>
                <input type="text" name="productPrice" placeholder="Price" id="price" value={productPrice} onChange={(text)=>{
                    setproductPrice(text.target.value)
                }} />
                <input type="text" name="discription" placeholder="Discription" id="discription" value={productdiscription} onChange={(text)=>{
                    setproductdiscription(text.target.value)
                }}/>
                <button type="button" className="btn btn-primary" onClick={()=>{
                    const productobj={

                        productName:productName,
                        productPrice:productPrice,
                        productdiscription:productdiscription,
                    }
                    props.setproducttoState(productobj)
                    setproductName([])
                    setproductPrice([])
                    setproductdiscription([])
                }}>Add Products</button>
            </div>
        </>
    )
}

export default ProductsAdd
