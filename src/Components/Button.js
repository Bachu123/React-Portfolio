import React from 'react'
import './button.css'
import PropTypes from 'prop-types'
export default function button(props) {
  return (<>
    <button class="button-33" >{props.title}</button>
    </> )
} 

button.defaultProps ={
  title:"download"
}
button.prototype = {
  title:PropTypes.string
}