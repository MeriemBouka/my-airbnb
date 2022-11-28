import React from "react"
import "../styles/card.css"

export default function Card(props) {
    let disponibilityText

    if(props.item.openSpots === 0){
        disponibilityText = "SOLD OUT"
    }
    else if(props.item.location === "Online"){
        disponibilityText = "ONLINE"
    }

    return (
        
            <div className="card--product">
                <img className="card--product_img" src={`images/${props.item.coverImg}`} alt=""/><br/>
                {disponibilityText && <p className="card--product_disponibility">{disponibilityText}</p>}
                <img className="card--product_logo" src="images/star.png"alt="star" />
                <span className="card--product_stars">{props.item.stats.rating}</span>
                <span className="card--product_number">({props.item.stats.reviewCount}) • </span>
                <span className="card--product_country">{props.item.location}</span>
                <p className="card--product_description">{props.item.title}</p>
                <p className="card--product_price">From ${props.item.price} 
                <span className="card--product_details"> / person</span>
                </p>
                
            </div>
    )
}