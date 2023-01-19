import { useNavigate } from "react-router-dom";

import { Button } from "..";
import { setClosingMenu } from "../../store/main/slice";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { logout } from "../../store/auth/slice";
import { useMatchMedia } from "../../hooks";

import "./logoutButton.scss";

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isMobile } = useMatchMedia();

  const signout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
      isMobile && dispatch(setClosingMenu());
      navigate("/all", { replace: true });
    }
  };

  return (
    <Button
      onClick={signout}
      color="transparent"
      children="Выйти"
      type="button"
    />
  );
};
export default LogoutButton;
