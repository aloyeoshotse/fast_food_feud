import * as React from "react"
import "./Instructions.css"

export function Instructions(props) {
  var instruct;
  if (props.cat == "" && props.rest == "" && props.item == ""){
    instruct = props.instructions.start
  }
  else if (props.cat != "" && props.rest == "" && props.item == ""){
    instruct = props.instructions.onlyCategory
  } 
  else if (props.cat == "" && props.rest != "" && props.item == "") {
    instruct = props.instructions.onlyRestaurant
  }
  else if (props.cat != "" && props.rest != "" && props.item == "") {
    instruct = props.instructions.noSelectedItem
  }
  else {
    instruct = props.instructions.allSelected
  }

  return (
    <aside className="instructions">
      <p>{instruct}</p>
    </aside>
  )
}

export default Instructions
