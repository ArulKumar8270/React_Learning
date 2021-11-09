import React from 'react'

export default function MenuList(props) {
    return (
        <div>
                {props.MenuItems.map(menuItems=>
                    <div className="list-group-item">{menuItems}</div> 
                )}
        </div>
    )
}
