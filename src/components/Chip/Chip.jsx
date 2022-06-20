import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false }) {
  isActive = true;
  var buttonClassName;
  if (!isActive) {buttonClassName = "chip"}
  else { buttonClassName = "chip active"}
  return (
    <button className={`${buttonClassName}`}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
