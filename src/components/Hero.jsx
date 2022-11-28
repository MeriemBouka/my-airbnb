import React from "react"
import "../styles/hero.css"

export default function Hero(){
    return(
        <section className="hero">
            <img className="section--img" src="images/photo-grid.png" alt="heros"/>
            <h1 className="section--title">Online Experiences</h1>
            <p className="section--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}