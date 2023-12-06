export const redirectToDashboard = (role) => {
    const history = useHistory();
    switch (role) {
      case 'admin':
        history.push('/admin/dashboard');
        break;
      case 'candidate':
        history.push('/candidate/dashboard');
        break;
      case 'employer':
        history.push('/employer/dashboard');
        break;
      default:
        // Redirect to a default route
        history.push('/');
        break;
    }
  };