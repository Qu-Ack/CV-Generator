import NavCv from "./navcv";
import Education from "./education";
import Experience from "./experience";
import Profile from "./profile";
import SideBar from "./sidebar";
import "../styles/cv.css"
function CV({info}) 
{
   return ( 
    <div className="cv">
        <div className="non-side">
        <NavCv info={info}/>
        <Profile/>
        <Experience arr={info.experience}/>
        <Education edarr={info.education}/>
        </div>
        <div className="side">
        <SideBar info={info}/>
        </div>
    </div>

   )
}

export default CV;