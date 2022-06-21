import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>
      <h4 className="item-name">{props.item.item_name}</h4>
      <ul className="fact-list">{nutritionFacts.map((item) => {
        //console.log("item",item)
        return (<NutritionalLabelFact key={item.id} item={props.item} label={item.label} attribute={item.attribute}/>)
          }
        )}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  //console.log("atr=",Object(props.attribute));
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[props.attribute]}</span>
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