import { useState } from "react"
import { data } from "../data.js"
import "../styles/navcv.css"

function NavCv() {
    const [image, setImage] = useState(data.user.image);

    return (
        <div className="nav-cv-container">
            <div className="image-container">
                <img src={image}></img>
            </div>
            <div className="textcontainer">
                <p className="name">{data.user.name}</p>
                <p className="title">{data.user.title}</p>
            </div>
        </div>
    )
}


export default NavCv;