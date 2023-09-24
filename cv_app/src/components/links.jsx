import "../styles/links.css"

function Links({data})
{
    return(
        <div className="links">
            <p className="Title">Links</p>
            <a href={data.linkedin} className="link">Linkedin</a> <br></br>
            <a href={data.instagram} className="link">Instagram</a>
        </div>
    )
}

export default Links