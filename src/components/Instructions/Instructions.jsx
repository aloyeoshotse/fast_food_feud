import * as React from "react"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p>{props.instructions.start}</p>
    </aside>
  )
}
/*<p>{props.instructions.onlyCategory}</p>
<p>{props.instructions.onlyRestaurant}</p>
<p>{props.instructions.noSelectedItem}</p>
<p>{props.instructions.allSelected}</p>
*/

export default Instructions
