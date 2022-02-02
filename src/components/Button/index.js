import styles from "./Button.module.css";

function Button({
  label,
  icon,
  disabled,
  stroked,
  round,
  className,
  secondary,
  onClick,
}) {
  return (
    <button
      className={
        styles.button +
        (stroked ? ` ${styles.stroked}` : "") +
        (secondary ? ` ${styles.secondary}` : "") +
        (round ? ` ${styles.round}` : "") +
        (className ? ` ${className}` : "")
      }
      disabled={disabled}
      onClick={onClick}
    >
      {label}
      {icon}
    </button>
  );
}

export default Button;
