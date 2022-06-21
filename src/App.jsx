import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header" //imported header component
import Instructions from "./components/Instructions/Instructions" //imported instructions component
import Chip from "./components/Chip/Chip"
import { useState } from "react"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"


// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()
export function App() {
  const [selected_category,setSelectedCategory] = useState("");
  const [selected_restaurant, setSelectedRestaurant] = useState("");
  const [selected_item,setSelectedItem] = useState("")
  var currentMenuItems = data.filter((item) => {
      if (selected_category != "") {return((item.food_category == selected_category && item.restaurant == selected_restaurant))}
    })
  console.log("current=",currentMenuItems)
  console.log("selected",selected_item)
  //console.log(categories);
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((item,idx) => {
            return (
            <Chip key={idx} label={item} onClick={()=>{setSelectedCategory(item)}} isActive={item === selected_category}/>
            )
          }
          )}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {<Header info={appInfo}/>}

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((item,idx) => {
              return(
                <Chip key={idx} label={item} onClick={() => {setSelectedRestaurant(item)}} isActive={item===selected_restaurant}/>
              )
            })
            
          }
          </div>
        </div>

        {<Instructions instructions={appInfo.instructions}/>}

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item,idx) => {
              return(
                <Chip key={idx} label={item.item_name} onClick={() => {setSelectedItem(item)}} isActive={item===selected_item}/>
              )
            })}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{<NutritionalLabel info={selected_item}/>}</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
