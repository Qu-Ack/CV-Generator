import NavCv from "./navcv";
import Education from "./education";
import Experience from "./experience";
import Profile from "./profile";
import { data } from "../data";
function CV() 
{
   return (
    <div className="cv">
        <NavCv/>
        <Profile/>
        <Experience arr={data.user.experience}/>
        <Education edarr={data.user.education}/>
    </div>
   )
}

export default CV;