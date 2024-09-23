import { forwardRef } from "react";
import styles from "./Field.module.sass";
interface InputFieldProps {
  id: string;
  label: string;
  extra?: string;
  placeholder: string;
  variant?: string;
  state?: "error" | "success";
  disabled?: boolean;
  type?: string;
  err?: string;
}
export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { id, extra, type, placeholder, disabled, err, ...rest },
    ref
  ) => {
    return (
      <div className={`${extra}`}>
        <input
          ref={ref}
          disabled={disabled}
          type={type}
          id={id}
          placeholder={placeholder}
          className={`${styles.input} ${err ? `${styles.input} ${styles.inputErr}` : ""}`}
          {...rest}
        />
      </div>
    );
  }
);