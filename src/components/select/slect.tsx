import React from 'react'
import "./select.css"
import Iselect from './interface'

export default function Select(props: Iselect) {
  return (
    <div className="selecao">
      <label htmlFor="select">{props.label}</label>
      <select id="select">
        <option value="">Escolha</option>
        {props.options.map(option => <option key={option}>{option}</option>)}
      </select>
    </div>
  )
}
