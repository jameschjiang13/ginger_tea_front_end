import React from 'react'
import FoodCard from './FoodCard'
import {connect} from 'react-redux'

function FoodContainer(props) {
    console.log(props)

    let arrOfComponents = props.food.map((foodObj) => {
        return <FoodCard key = {foodObj.id} name = {foodObj.name} price = {foodObj.price}/>
    }
    )
    return (
        <div>
            I'm food container
            {arrOfComponents}
        </div>
    )
}

let mapStateToProps = (globalState) => {
    return {
        food: globalState.food
    }
}


export default connect(mapStateToProps)(FoodContainer)

