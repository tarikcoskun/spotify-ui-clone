import { forwardRef } from "react";
import classNames from "classnames";

// Styles
import s from "./Button.module.scss";

export type ButtonColors = "brand" | "surface" | "soft";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColors;
  small?: boolean;
  square?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const { small, leading, trailing, className, children } = props;

  return (
    <button {...props} ref={forwardedRef} className={classNames(s.button, small && s.small, className)}>
      {leading && <>{leading}</>}
      {children}
      {trailing && <>{trailing}</>}
    </button>
  );
});

Button.displayName = "Button";

export default Button;