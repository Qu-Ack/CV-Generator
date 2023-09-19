import { useState } from "react"
import "./righthero.css"

export let data = []

function Righthero() {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName ] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");    


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
            <label htmlFor="location">Location</label> <br></br>
            <input type="text" name="location" id="location" value={location} onChange={(e) => {setLocation(e.target.value)}} placeholder="Location"/>
            </section>
        </form>
        </div>

        <div className="cv">
            <div className="personal">
                <p className="name">{firstName} {lastName}</p>
                <div className="emailandphone">
                    <p className="email"> ★ {email}</p>
                    <p className="phone"> ★ {phoneNumber}</p>
                    <p className="location"> ★ {location} </p>
                </div>
            </div>
            <hr></hr>
        </div>
        </div>
    )
}
export default Righthero