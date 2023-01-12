import classNames from "classnames";

import "./btton.scss";

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  type?: "submit" | "button";
  style?: object;
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  color,
  type,
  style,
}) => {
  const btnClass = classNames({
    btn: true,
    btn__white: color === "white",
    btn__green: color === "green",
  });

  return (
    <button style={style} type={type} onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
