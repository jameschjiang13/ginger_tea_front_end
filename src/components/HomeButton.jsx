import React from 'react'
import { NavLink } from "react-router-dom";

export default function HomeButton() {
    return (
        <div>
            <NavLink to = "/foods">Home</NavLink>
        </div>
    )
}
