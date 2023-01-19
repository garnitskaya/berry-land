import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks";

type PrivatePropsType = {
  children: React.ReactElement;
};

const Private: React.FC<PrivatePropsType> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default Private;
