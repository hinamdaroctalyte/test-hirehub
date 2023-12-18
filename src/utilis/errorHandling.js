import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { redirect } from "react-router-dom";
import notificationService from './notification';


export const handleApiError = (error) => {



  console.log(error, "error");
  if (error.response && error.response.status === 401) {
    notificationService.error("Session Expired")
    localStorage.removeItem("user")
    return redirect("/")
  } else if (error.message === "Network Error") {
    notificationService.error("Network check please")
    localStorage.removeItem("user")
    return redirect("/")
    
  }


  if (error.response) {
    const status = error.response.status;
    const { data } = error.response.data;
    console.log(data, "weoeoeeoeoeo");
    const errorMsg =  data?.error  || data 
    throw new Error(errorMsg)
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error('No response from the server');
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error(`Request Error: ${error.message}`);
  }


}