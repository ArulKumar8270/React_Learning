import React, {useState} from 'react'

function MenuAdd(props) {
    const [sideMenu, setsideMenu] = useState("")
    return (
        <>
            <div className="addMenu">
                <input type="text" name="sideMenu" placeholder="Menu Name" value={sideMenu} onChange={(text)=>{
                    setsideMenu(text.target.value);
                }}/>
                <button type="button" className="btn btn-primary" onClick={()=>{
                    const menuObj={
                        sideMenu:sideMenu,
                    }
                    props.setMenutostate(menuObj)
                    console.log(menuObj)
                }}>Add Menu</button>
            </div>
        </>
    )
}

export default MenuAdd
