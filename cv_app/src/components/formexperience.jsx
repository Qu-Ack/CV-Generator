import { useState } from "react"

export default function FormExperience({obj , test}) 
{
    const [show , setShow] = useState(false)
    return (
        <div className="formexperience">
        {show && <Help obj={obj} test={test}/>}
        <button onClick={() => setShow(!show)}>
            Work Details
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

