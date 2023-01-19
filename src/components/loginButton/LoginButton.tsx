import { useNavigate } from "react-router-dom";

import { Button } from "..";
import { useMatchMedia } from "../../hooks";
import { setClosingMenu } from "../../store/main/slice";
import { useAppDispatch } from "./../../hooks/useTypedSelector";

const LoginButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isMobile } = useMatchMedia();

  const sigin = () => {
    isMobile && dispatch(setClosingMenu());
    navigate("/login");
  };

  return (
    <Button
      onClick={sigin}
      color="transparent"
      children="Войти"
      type="button"
    />
  );
};
export default LoginButton;
