import React from 'react'
import IBtn from './interface'
import "./btn.css"

export default function Btn(props: IBtn) {
  return (
    <button className="btn"type={props.type}>{props.title}</button>
  )
}


