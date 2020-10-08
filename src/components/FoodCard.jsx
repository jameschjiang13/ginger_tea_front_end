import React from 'react'
import { useHistory } from "react-router-dom";

export default function FoodCard(props) {
    let history = useHistory()

    let handleClick = (e) => {
        console.log(props.name.toLocaleLowerCase().replace(/\s+/g, '_'))
        let urlFoodName = props.name.toLocaleLowerCase().replace(/\s+/g, '_')
        history.push(`/${urlFoodName}`)
    }
    

    return (
        <div>
            <ul>{props.name}</ul>
            <ul>{props.price}</ul>
            <ul onClick={handleClick}> More Details </ul>
        </div>
    )
}
