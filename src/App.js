import React, { Component } from 'react'
import {connect} from 'react-redux'
import FoodContainer from './components/FoodContainer'
import Login from './components/Login'
import AboutUs from './components/AboutUs'
import FoodNotFound from './components/FoodNotFound'
import FoodShow from './components/FoodShow'
import HomeButton from './components/HomeButton'

import { Route, Switch } from "react-router-dom";
import {withRouter} from 'react-router-dom'

class App extends Component {


  foodArr = [
    {
      id: 1, 
      name: "Ginger Tea",
      price: 5.25
    }, 
    {
      id: 2,
      name: "Coffee Bean",
      price: 10
    }, 
    {
      id: 3,
      name: "Banana",
      price: 1
    }
  ]

  decideWhichFoodToRender = (routerProps) => {
    let currentFoodName = routerProps.match.params.food
    let foodFound = this.props.food.find((food) => {
        return food.name.toLocaleLowerCase().replace(/\s+/g, '_') === currentFoodName
      }
    )
    if (foodFound) {
      console.log(foodFound)
      return <FoodShow 
              key = {FoodNotFound.id}
              foodObj = {foodFound}
              />
    } else {
      return <FoodNotFound/>
    }
  }
  

  render() {


    this.props.setAllFood(this.foodArr)

    return (
      <div>
        Welcome to Jojo's Coffee Online Shop
        <HomeButton/>
        <Switch>
          <Route path="/about_us">
            <AboutUs/>
          </Route>

          <Route path="/foods">
            <FoodContainer/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path = "/:food" render = {this.decideWhichFoodToRender}/>

        </Switch>
      </div>
    )
  }
}



// Redux Stuff

let setAllFood = (foodArr) => {
  return {
    type: "SET_ALL_FOOD", 
    payload: foodArr
  }
}

let mapDispatchToProps = {
  setAllFood: setAllFood
}

let mapStateToProps = (globalState) => {
  return {
      food: globalState.food
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
