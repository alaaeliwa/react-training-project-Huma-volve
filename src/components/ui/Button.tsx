import "./style.css";

interface Iprops {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const Button = ({
  text,
  onClick,
  variant = "primary",
  disabled = false,
}: Iprops) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
