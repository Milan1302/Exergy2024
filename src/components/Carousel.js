import React from 'react'
import exergy from '../images/exergy wallpaper (2).jpg'
export default function Carousel(props) {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-new">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={exergy} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-md-block">
                            <h1>{props.pagename}</h1>
                        </div>
                </div>
     
            </div>

        </div>
    )
}
