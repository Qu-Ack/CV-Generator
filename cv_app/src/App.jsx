import Experience from "./components/experience"
import NavCv from "./components/navcv"
import Profile from "./components/profile"
import { data } from "./data"
function App() {
  return (
    <Experience arr = {data.user.experience}/>
  )

}

export default App
