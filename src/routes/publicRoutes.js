import { Navigate } from "react-router-dom";
import { getFromPersistance } from "../utils/utils";

const PublicRoutes = ({ Component }) => {
  let isAuthenticated = getFromPersistance("auth_token");
  return isAuthenticated ? <Navigate to="/Home" /> : <Component />;
};
export default PublicRoutes;
