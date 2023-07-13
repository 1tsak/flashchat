import React from 'react'

export const MessageOptions = () => {
    const bodyStyle = {
        position: "absolute",
        borderRadius: "0.25rem",
        zIndex: "2",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        top: "20%",
        left: "95%",
        backgroundColor: "rgba(20, 20, 31, 11)"
    }
    const listStyle = {
        listStyle: "none",
        padding: "0.5rem 1rem",
        fontSize: "0.8rem"
    }
    const listItemStyle = {
        cursor: "pointer"
    }
    return (
        <div style={bodyStyle}>
            <ul style={listStyle}>
                <li style={listItemStyle}>Delete</li>
            </ul>
        </div >
    )
}