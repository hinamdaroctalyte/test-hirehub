// ------------ Auth ------------
import ForgotPasswordPage from "./auth/forgot_password";
import LoginPage from "./auth/login";
import RegisterPage from "./auth/register";
// ------------ Admin ------------
import AdminDashboard from "./admin/dashboard";

import ApprovedEmployers from "./admin/approved_employers/main";
import ViewApprovedEmployers from "./admin/approved_employers/view";
import EditApprovedEmployers from "./admin/approved_employers/edit";

import MainEmployersRequest from "./admin/employers_request/main";
import EditEmployersRequest from "./admin/employers_request/edit";
import ViewEmployersRequest from "./admin/employers_request/view";

import MainRejectedEmployers from "./admin/rejected_employers/main";
import EditRejectedEmployers from "./admin/rejected_employers/edit";
import ViewRejectedEmployers from "./admin/rejected_employers/view";

import ManageEmployers from "./admin/manage_employers/main";
import ViewEmployers from "./admin/manage_employers/view";
import EditEmployers from "./admin/manage_employers/edit";


import ManageCandidates from "./admin/manage_candidates/main";
// ------------ Employer ------------
import EmployerDashboard from "./employer/dashboard";
import ManageProfile from "./employer/manage_profile";

export {
    // ------------ Admin ------------
    AdminDashboard,

    ForgotPasswordPage,
    LoginPage,
    ManageEmployers,
    ViewEmployers,
    EditEmployers,
    ManageCandidates,

    ApprovedEmployers,
    ViewApprovedEmployers,
    EditApprovedEmployers,

    MainEmployersRequest,
    EditEmployersRequest,
    ViewEmployersRequest,

    MainRejectedEmployers,
    EditRejectedEmployers,
    ViewRejectedEmployers,

    RegisterPage,
    // ------------ Employer ------------
    EmployerDashboard,
    ManageProfile,
} 