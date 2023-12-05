import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AdminDashboard,
  LoginPage,
  ForgotPasswordPage,
  ManageEmployers,
  ViewEmployers,
  EditEmployers,
  ManageCandidates,
  ManageProfile,
  RegisterPage,
  EmployerDashboard,
  ApprovedEmployers,
  ViewApprovedEmployers,
  MainEmployersRequest,
  EditEmployersRequest,
  ViewEmployersRequest,
  EditApprovedEmployers,
} from "./pages/index";
import { AdminLayout, EmployerLayout } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" index element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="admin/" element={<AdminLayout />} >
          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="manage-candidates" element={<ManageCandidates />} />

          <Route path="manage-employers" element={<ManageEmployers />} />
          <Route path="manage-employers/view" element={<ViewEmployers />} />
          <Route path="manage-employers/edit" element={<EditEmployers />} />

          <Route path="approved-employees" element={<ApprovedEmployers />} />
          <Route path="approved-employees/edit" element={<EditApprovedEmployers />} />
          <Route path="approved-employees/view" element={<ViewApprovedEmployers />} />

          <Route path="employers-request" element={<MainEmployersRequest />} />
          <Route path="employers-request/edit" element={<EditEmployersRequest />} />
          <Route path="employers-request/view" element={<ViewEmployersRequest />} />
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
