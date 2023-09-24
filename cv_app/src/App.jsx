import "./app.css"
import CV from "./components/CV"
import FormPersonal from "./components/formpersonal"
import { data } from "./data";
import { useState } from "react";

function App() {

  
  let [obj, setObj] = useState(data);

    function test(target) {
      return (
        function handleChange(e) {
          const newObj = {...obj , [target]:e.target.value}
          setObj(newObj)
        }
      )
    }

  return (
    <div className="app">
      <CV info={obj}/>
    <FormPersonal obj={obj} test={test}/>
    </div>
    
  )

}

export default App
