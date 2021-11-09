import React, {useState} from 'react'
import MenuAdd from '../MenuAdd/MenuAdd'
import MenuList from '../MenuAdd/MenuList'
import ProductList from '../ProductsAdd/ProductList'
import ProductsAdd from '../ProductsAdd/ProductsAdd'

export default function MainContent(props) {
    const [MenuItems, setMenuItems] = useState(["Home"])
    const [Products, setProducts] = useState([""]) 
    const setproducttoState = (productobj) => {
        setProducts([...Products, productobj])
    }
    const setMenutostate = (menuObj) => {
        setMenuItems([...MenuItems, menuObj])
    }
    return (
        <>
           <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-sm-4">
                        <MenuList MenuItems={MenuItems}/>
                    </div>
                    <div className="col-sm-8">
                        <div className="menu">
                            <MenuAdd setMenutostate={setMenutostate}/>
                            <ProductsAdd setproducttoState={setproducttoState}/>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <ProductList Products={Products}/>
                    </div>
                </div>
            </div> 
        </>
    )
}
