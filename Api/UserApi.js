
import Api,{ getCookie }from "./Api";


export const UserApi = async ({ username, password }) => {
  try {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const result = await Api.post("/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",  // Required for FormData
        "X-CSRFToken": getCookie("csrftoken"),  // Attach the CSRF token explicitly
      },
    });

    if (result.status === 200) {
      return result;
    } else if (result.status >= 300 && result.status < 500) {
      // Handle status 300, 400, or other client-side errors
    } else if (result.status >= 500) {
      // Handle server-side errors
    }
  } catch (error) {
    console.error("API error:", error);
  }
};
