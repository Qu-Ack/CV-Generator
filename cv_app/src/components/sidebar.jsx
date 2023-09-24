import Details from "./personaldetails";
import Links from "./links";
import { data } from "../data";

function SideBar({info}) 
{
    return (
    <div className="sidebar">
    <Details data={info}/>
    <Links data={info}/>
</div>
    )
}
export default SideBar;