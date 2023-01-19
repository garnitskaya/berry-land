import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { Button, Field } from "..";
import { useInput } from "../../hooks";
import { UserType } from "../../store/auth/types";
import { login } from "../../store/auth/slice";

import "./loginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = useInput("", { isEmpty: true });
  const password = useInput("", { isEmpty: true });
  const dispatch = useAppDispatch();

  const fromPage = location.state?.from?.pathname || "/all";

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (email.valueValid && password.valueValid) {
      const user: UserType = {
        email: email.value,
        pasword: password.value,
      };

      dispatch(login(user));
      navigate(fromPage, { replace: true });
    }
  };

  return (
    <div className="login">
      <h1 className="login__title">Вход</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__items">
          <Field
            {...email}
            type="email"
            placeholder="Эл. почта"
            name="email" />
          <Field
            {...password}
            type="password"
            placeholder="Пароль"
            name="password"
          />
        </div>
        <Button
          disabled={!email.valueValid || !password.valueValid}
          color="green"
          children="Войти"
          type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
