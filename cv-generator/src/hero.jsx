import "./hero.css"
import RightHero from "./righthero.jsx"
import LeftHero from "./lefthero.jsx"
function Hero() {
    return (
        <div className="Hero">
            <RightHero/>
            <LeftHero/>
        </div>
    )
}


export default Hero