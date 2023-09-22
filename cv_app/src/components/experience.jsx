import "../styles/experience.css"

function Experience({ arr }) {
    console.log(arr)
    const listItems = arr.map((job) =>
        <>
            <p className="company" >{job.companyname}</p>
            <p className="jobtitle">{job.jobtitle}</p>
            <p className="dates">{job.startdate} - {job.enddate}</p>
            <ul className="tasks">
                {job.tasks.map((task) =>
                    <li>{task}</li>
                )}
            </ul>
        </>

    )
    return (
        <div className="experience">
            <p class="Heading">Experience</p>
            {listItems}
        </div>
    )

}



export default Experience