import React, { Component } from 'react'

export default class FoodShow extends Component {
    render() {
        console.log(this.props.foodObj)
        return (
            <div>
                Name: {this.props.foodObj.name}
                <br/>
                Price: {this.props.foodObj.price}
                <br/>
                <button>Add To Cart</button>

            </div>
        )
    }
}
