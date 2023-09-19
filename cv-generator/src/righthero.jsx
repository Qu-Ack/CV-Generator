import "./righthero.css"

function Righthero() {
    

    return (
        <div className="form-wrapper">
        <form>
            <section>
            <label htmlFor="firstname">First Name</label> <br></br>
            <input type="text" id="firstname" name="firstname" placeholder="First Name" required/> <br/>
            <label htmlFor="lastname">Last Name</label> <br/>
            <input type="text" id="lastname" name="lastname" placeholder="Last Name" required/> <br/>
            <label htmlFor="email">E-Mail</label> <br/>
            <input type="email" name="email" id="email" placeholder="Email"/> <br/>
            <label htmlFor="phonenumber">Phone Number</label> <br></br>
            <input type="number" name="phonenumber" id="phonenumber" placeholder="Phone Number"/>
            </section>
        </form>
        </div>
    )
}

export default Righthero