

export const redirectToDashboard = (role, navigate) => {
  console.log("startttttttttttttttt");
 

  switch (role) {
    case 'admin':
      navigate('/admin/dashboard');
      break;
    case 'candidate':
      navigate('/candidate/dashboard');
      break;
    case 'employer':
      console.log("employerer");
      navigate('/employer/dashboard');
      break;
    default:
      // Redirect to a default route
      navigate('/');
  }
};
