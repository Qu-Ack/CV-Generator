import { useState } from "react"
import "./righthero.css"

export let data = []

function Righthero() {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName ] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");    


    data[0] = {
        firstname: firstName,
        lastname:lastName,
        Email: email,
        phone: phoneNumber

    }


    return (



        <div className="hero">
        <div className="form-wrapper">
        <form>
            <section>
            <label htmlFor="firstname">First Name</label> <br></br>
            <input type="text" id="firstname" name="firstname" placeholder="First Name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} required/> <br/>
            <label htmlFor="lastname">Last Name</label> <br/>
            <input type="text" id="lastname" name="lastname" placeholder="Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value)}} required/> <br/>
            <label htmlFor="email">E-Mail</label> <br/>
            <input type="email" name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"/> <br/>
            <label htmlFor="phonenumber">Phone Number</label> <br></br>
            <input type="number" name="phonenumber" id="phonenumber" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} placeholder="Phone Number"/>
            </section>
        </form>
        </div>

        <div className="cv">
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{email}</h1>
            <h1>{phoneNumber}</h1>
        </div>
        </div>
    )
}
export default Righthero