import {
  LoginPage,
  SignupPage,
  NormalUserMasterPage,
  DonationsPage,
  DonatePage,
  MyDonationsPage,
} from "../src/pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/donations" element={<NormalUserMasterPage />}>
            <Route index element={<DonationsPage />} />
            <Route path="donate" element={<DonatePage />} />
            <Route path="myDonations" element={<MyDonationsPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
