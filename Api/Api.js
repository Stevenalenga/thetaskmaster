/*


import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



export async function getCSRFToken() {
  try {
    // Always fetch a new token from the server to ensure it's valid
    const response = await axios.get('http://10.24.8.59:8000/events/get-csrf-token/', { withCredentials: true });

    const csrfToken = response.data.csrfToken || response.headers['x-csrftoken'];
    
    if (csrfToken) {
      await AsyncStorage.setItem('csrfToken', csrfToken);  // Save the new token
      return csrfToken;
    }

    console.error('CSRF token not found in response');
    return null;

  } catch (error) {
    console.error('Error fetching CSRF token:', error);
    return null;
  }
}


// Create an axios instance
const Api = axios.create({
  baseURL: "http://10.24.8.59:8000/events/",
  responseType: "json",
  withCredentials: true,  // Necessary for cookie handling across requests
  headers: {
    'Content-Type': 'application/json',  // Ensure JSON requests
    'Accept': 'application/json'
  },
  timeout:5000
});

// Add a request interceptor to include the CSRF token in headers

Api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 403) {
      console.log('Invalid CSRF token, clearing stored token.');
      await AsyncStorage.removeItem('csrfToken');  // Clear invalid token
    }
    return Promise.reject(error);
  }
);
export default Api;
*/