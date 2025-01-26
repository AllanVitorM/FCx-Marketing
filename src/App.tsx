import { Route, BrowserRouter as Router, Routes } from "react-router"
import { PageList } from "./list-clients/PageList"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageList/>}/>
      </Routes>
    </Router>
  )
}

export default App
