import { useState } from "react";
import { data } from "../data";
import Education from "./education";




export default function FormPersonal({obj , test})
{ 
 
    return (
        <div className="personal">
        <input type="text" placeholder="Your Name" value={obj.name} onChange={test("name")} />
        <input type="text" placeholder="Job Title" value={obj.title} onChange={test("title")} />
        <input type="text" placeholder="Address" value={obj.address} onChange={test("address")}/> 
        <input type="number" placeholder="Phone Number" value={obj.phone} onChange={test("phone")}/>
        <input type="text" placeholder="Email" value={obj.email} onChange={test("email")}/>       
        </div>
    )



}

