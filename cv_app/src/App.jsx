import "./app.css"
import CV from "./components/CV"
import { data } from "./data";
import { useState } from "react";
import Form from "./components/Form";

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
      <Form obj={obj} test={test}/>
    </div>
    
  )

}

export default App
