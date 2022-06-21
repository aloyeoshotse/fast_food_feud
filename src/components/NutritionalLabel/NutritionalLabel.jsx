import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.info.item_name}</h4>

      <ul className="fact-list">{nutritionFacts.map((item,idx) => {
        return (
        <NutritionalLabelFact key={idx} fact={item}/>
        )
      }
      )}</ul>
    </div>
  )
}

export function NutritionalLabelFact({item,fact}) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{/* WRITE CODE HERE */}</span>{" "}
      <span className="fact-value">{/* WRITE CODE HERE */}</span>
    </li>
  )
}

export default NutritionalLabel

/*{props.info.item_name} */

/*{nutritionFacts.map((item,idx) => {
        return (
        <NutritionalLabelFact key={idx} fact={item}/>
        )
      }
      )}*/