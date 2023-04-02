import React from 'react'
import Iinput from './interface'
import "./field.css"

export default function FieldText(props: Iinput) {
  const placeholderEdit = `${props.placeholder}...`
  return (
    <div className="field">
      <label htmlFor={props.id}>{props.label}:</label>
      <input type="text" placeholder={placeholderEdit} id={props.id}/>
    </div>
  )
}
