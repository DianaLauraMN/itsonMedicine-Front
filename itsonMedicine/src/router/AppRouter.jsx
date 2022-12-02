import {
  LoginPage,
  SignupPage,
  NormalUserMasterPage,
  DonationsPage,
  DonatePage,
  MyDonationsPage,
  AdminMasterPage,
  MedicinesPage,
  RequestsPage,
} from "../../src/pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function AppRouter() {
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
          <Route path="/admin" element={<AdminMasterPage />}>
            <Route path="medicines" element={<MedicinesPage />} />
            <Route path="requests" element={<RequestsPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
