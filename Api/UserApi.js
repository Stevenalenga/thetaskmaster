import Api from "./Api";

export const UserApi = async ({ username, password }) => {
  try {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const result = await Api.post("/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(result);
    if (result.status === 200) {
      return result;
    } else if (result.status === 300) {
      // Handle status 300 response
    } else if (result.status === 400) {
      // Handle status 400 response
    } else if (result.status === 500) {
      // Handle status 500 response
    }
  } catch (error) {
    console.error(error);
  }
};

/*
export const UserApi = async ({ username, password }) => {
  try {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const result = await Api.post("/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(function (response) {
      console.log(response);
    });

    return result.data;
  } catch (error) {
    throw error;
  }
};

/*

export const UserApi = async ({ username, password }) => {
  try {
    const result = await Api.post("/login", {
      username: username,
      password: password,
    });

    if (result.status === 200) {
      return result.data;
    } else if (response.status === 300) {
      // Handle status 300 response
    } else if (response.status === 400) {
      // Handle status 400 response
    } else if (response.status === 500) {
      // Handle status 500 response
    }
  } catch (error) {
    throw error;
  }
};

/*
export const UserApi = async (data) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const config = {
      headers,
      withCredentials: true, // Include credentials (cookies) in the request
      auth: {
        username: "your-username",
        password: "your-password",
      },
    };

    const response = await Api("login", data, config);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("An error occurred during login");
    }
  } catch (error) {
    throw error;
  }
};

/
export const UserApi = async (data) => {
  try {
    const response = await Api.post("/login", data);

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 300) {
      // Handle status 300 response
    } else if (response.status === 400) {
      // Handle status 400 response
    } else if (response.status === 500) {
      // Handle status 500 response
    }
  } catch (error) {
    throw error;
  }
};
/*
export const UserApi = (data) => {
  Api.post("/login", async (req, res) => {

    data : data
  });
  if (res.status === 200) {
      return result.data;
    } else if (result.status === 300) {
      // Handle status 300 response
    } else if (result.status === 400) {
      // Handle status 400 response
    } else if (result.status === 500) {
      // Handle status 500 response
    }
  } catch (error) {
    throw error;
  }


/*
export const UserApi = async (params) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    const result = await Api.post(
      "/login",
      { username: email, password: password },
      { headers }
    );

    if (result.status === 200) {
      return result.data;
    } else if (result.status === 300) {
      // Handle status 300 response
    } else if (result.status === 400) {
      // Handle status 400 response
    } else if (result.status === 500) {
      // Handle status 500 response
    }
  } catch (error) {
    throw error;
  }
};

/*

import Api from './Api'; // Import the API module

const UserApi = async (params) => {
  try {
    const response = await Api.post('/login', { db: params.db, form_data: params.form_data });

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 300) {
      // Handle status 300 response
    } else if (response.status === 400) {
      // Handle status 400 response
    } else if (response.status === 500) {
      // Handle status 500 response
    }
  } catch (error) {
    throw error;
  }
};

export default UserApi;



import Api from './Api'; // Import the API module

const UserApi = async (params) => {
  try {
    const response = await Api.post('/login', { db: params.db, form_data: params.form_data });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default UserApi;



firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });



  const user = db.query(User).filter(User.email == form_data.username).first();

  if (!user) {
    return res.status(400).json({ detail: 'Incorrect email or password' });
  }

  // Verify the password
  if (!verify_password(form_data.password, user.hashed_password)) {
    return res.status(400).json({ detail: 'Incorrect email or password' });
  }

  // Generate an access token using a UUID
  const access_token = uuidv4();

  // Return the access token and token type as the response
  return res.json({ access_token, token_type: 'bearer' });
});







/*

export const UserApi = async (data) => {
  try {
    const result = Api("/login", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },

      data: data,
    });

    if (result.status === 200) {
      return result.data;
    } else if (result.status === 300) {
      // Handle status 300 response
    } else if (result.status === 400) {
      // Handle status 400 response
    } else if (result.status === 500) {
      // Handle status 500 response
    }
  } catch (error) {
    throw error;
  }
};

/*

const BASE_URL = "http://127.0.0.1:8000";

export const UserApi = {
  post: async (url, data) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

*/
