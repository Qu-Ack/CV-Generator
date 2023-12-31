import { useState } from "react";
import { data } from "../data";
import Education from "./education";
import '../styles/formpersonal.css';




export default function FormPersonal({obj , test})
{ 
    const [show , setShow] = useState(false)
    return (
        <div className="formpersonal">
        {show && <Help obj={obj} test={test}/>}
        <button onClick={() => setShow(!show)}>
            Personal Details
        </button>
        </div>
    )
}


function Help({obj , test})
{
    return (
        <div className="personal">
        <input type="text" placeholder="Your Name" value={obj.name} onChange={test("name")} />
        <input type="text" placeholder="Job Title" value={obj.title} onChange={test("title")} />
        <input type="text" placeholder="Address" value={obj.address} onChange={test("address")}/> 
        <input type="number" placeholder="Phone Number" value={obj.phone} onChange={test("phone")}/>
        <input type="text" placeholder="Email" value={obj.email} onChange={test("email")}/>
        <input type="text" placeholder="Profile" value={obj.profile} onChange={test("profile")}/>       
        </div>
    )
}

