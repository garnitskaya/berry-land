import classNames from "classnames";

import "./button.scss";

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  type?: "submit" | "button";
  style?: object;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  color,
  type,
  style,
  disabled
}) => {
  const btnClass = classNames({
    btn: true,
    btn__white: color === "white",
    btn__green: color === "green",
    btn__login: color === "transparent"
  });

  return (
    <button
      disabled={disabled}
      style={style}
      type={type}
      onClick={onClick}
      className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
