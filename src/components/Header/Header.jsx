import * as React from "react"
import "./Header.css"

export function Header(props) {
  return (
    <header className="header">
      <h1 className="title">{props.props.title}</h1>
      <h4 className="tagline">{props.props.tagline}</h4>
      <p className="description">{props.props.description}</p>
    </header>
  )
}

export default Header
