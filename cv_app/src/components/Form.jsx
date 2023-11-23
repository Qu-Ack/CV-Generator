import FormPersonal from "./formpersonal"
import FormExperience from "./formexperience"

export default function Form({obj , test}) {
    return (
        <div className="form">
            <FormPersonal obj={obj} test={test}/>
            <FormExperience obj={obj} test={test}/>
        </div>
    )
}