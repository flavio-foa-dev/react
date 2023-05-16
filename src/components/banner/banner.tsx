import React from 'react'
import "./banner.css"
import hero from '../../../public/hero.png'

interface Ibanner {
  src: string,
  alt: string
}

export default function Banner({}:Ibanner) {
  return (
    <header className="banner">
      <img src={hero} alt="hero" />
    </header>
  )
}
