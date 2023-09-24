import "../styles/details.css"

function Details({data}) 
{
    return (
        <div className="personal">
        <p className="Title">Details</p>
        <p className="Heading">Address</p>
        <p className="content">{data.address}</p>
        <p className="Heading">Phone</p>
        <p className="content">{data.phone}</p>
        <p className="Heading">Email</p>
        <p className="content">{data.email}</p>
        </div>
    )
}

export default Details