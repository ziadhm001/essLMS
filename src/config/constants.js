let BACKEND_SERVER = null;
if (false) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = "http://localhost:3000/";
}

export const API_SERVER = BACKEND_SERVER;