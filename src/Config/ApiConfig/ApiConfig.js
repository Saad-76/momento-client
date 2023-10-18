export const Base = "http://localhost:5001/relations/";

const API = {
  Auth: {
    Login: `${Base}signIn`,
    SignUp: `${Base}newUser`,
    Forget: `${Base}forget`,
  },
  Dashboard: {
    Posts: `${Base}posts`,
  },
};
export default API;
