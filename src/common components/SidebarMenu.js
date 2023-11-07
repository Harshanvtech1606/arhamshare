import React from 'react'

function SidebarMenu({ isOpen, onClose }) {
    const sidebarStyles = {
        width: isOpen ? '300px' : '0',
    };
    return (
        <div className="sidebar-menu" style={sidebarStyles}>
            <button className="close-sidebar" onClick={onClose}>
                &times;
            </button>
            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
            {/* Add your menu items here */}
        </div>
    )
}

export default SidebarMenu