import { useState } from "react"
import "../styles/navcv.css"
import { data } from "../data";

function NavCv({info}) {
    const [image, setImage] = useState(info.image);

    return (
        <div className="nav-cv-container">
            <div className="image-container">
                <img src={image}></img>
            </div>
            <div className="textcontainer">
                <p className="name">{info.name}</p>
                <p className="title">{info.title}</p>
            </div>
        </div>
    )
}


export default NavCv;