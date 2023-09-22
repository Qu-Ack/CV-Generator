import "../styles/education.css"

function Education({edarr}) 
{
    const display = edarr.map(element => 
           <>
             <p className="university">{element.university}</p>
             <p className="course">{element.course}, {element.startdate} - {element.enddate}</p>
           </>
        )
    return (
        <div className="education">
            <p className="Title">Education</p>
            {display}
        </div>
    )
}

export default Education;