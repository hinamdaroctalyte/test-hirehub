// errorHandling.js

export const handleApiError = (error) => {
    console.log(error, "error");
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const status = error.response.status;
      const {data} = error.response.data
    //   console.log(data.data);
      throw new Error(data.error)
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from the server');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error(`Request Error: ${error.message}`);
    }
  };
  
  // Add more utility functions as needed
  