import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AdminDashboard,
  LoginPage,
  ForgotPasswordPage,
  ManageEmployers,
  ViewEmployers,
  EditEmployers, 
  ManageProfile,
  RegisterPage,
  EmployerDashboard,
  ApprovedEmployers,
  ViewApprovedEmployers,
  MainEmployersRequest,
  MainRejectedEmployers,
  EditEmployersRequest,
  ViewEmployersRequest,
  EditRejectedEmployers,
  ViewRejectedEmployers,
  EditApprovedEmployers,
  MainCandidates,
  EditCandidates,
  ViewCandidates,
  ScheduleCandidates
} from "./pages/index";
import { AdminLayout, EmployerLayout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="admin/" element={<AdminLayout />} >
          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="manage-employers" element={<ManageEmployers />} />
          <Route path="manage-employers/view/:id" element={<ViewEmployers />} />
          <Route path="manage-employers/edit/:id" element={<EditEmployers />} />

          <Route path="approved-employers" element={<ApprovedEmployers />} />
          <Route path="approved-employers/edit/:id" element={<EditApprovedEmployers />} />
          <Route path="approved-employers/view/:id" element={<ViewApprovedEmployers />} />

          <Route path="employers-request" element={<MainEmployersRequest />} />
          <Route path="employers-request/edit/:id" element={<EditEmployersRequest />} />
          <Route path="employers-request/view/:id" element={<ViewEmployersRequest />} />

          <Route path="rejected-employers" element={<MainRejectedEmployers />} />
          <Route path="rejected-employers/edit/:id" element={<EditRejectedEmployers />} />
          <Route path="rejected-employers/view/:id" element={<ViewRejectedEmployers />} />

          <Route path="manage-candidates" element={<MainCandidates />} />
          <Route path="manage-candidates/edit/:id" element={<EditCandidates />} />
          <Route path="manage-candidates/view/:id" element={<ViewCandidates />} />
          <Route path="manage-candidates/schedule/:id" element={<ScheduleCandidates />} />
        </Route>

        <Route path="employer/" element={<EmployerLayout />} >
          <Route path="dashboard" element={<EmployerDashboard />} />
          <Route path="manage-profile" element={<ManageProfile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
