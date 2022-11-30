import { LoginPage, SignupPage } from "../src/pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </>
  )
}


export default App
