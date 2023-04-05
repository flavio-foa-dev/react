import React, { useState } from 'react'
import Iinput from './interface'
import "./field.css"

export default function FieldText(props: Iinput) {



  const placeholderEdit = `${props.placeholder}...`

  function handleText(e: React.ChangeEvent<HTMLInputElement>){
    props.fn({...props.card, [e.target.name]: e.target.value})

  }

  return (
    <div className="field">
      <label htmlFor={props.id}>{props.label}:</label>
      <input
        type="text"
        value={props.value}
        autoComplete='off'
        placeholder={placeholderEdit}
        id={props.id}
        onChange={handleText}
        required={props.isRequired}
        name={props.name}
      />
    </div>
  )
}
