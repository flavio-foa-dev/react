import React from 'react'
import "./banner.css"
import hero from '../../../public/hero.png'

export default function Banner() {
  return (
    <header className="banner">
      <img src={hero}alt="hero" />
    </header>
  )
}
