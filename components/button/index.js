// styles
import "./styles.scss";

function PrimaryButton({ className, onClick, disabled, type, buttonName, btnLeftIcon, btnRightIcon }) {
  return (
    <h2>
      <button
        className={`button ${className}`}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {btnLeftIcon &&
          <img className="btnIcon left" src={btnLeftIcon} alt="icon" width="12" height="12" />
        }
        {buttonName}
        {btnRightIcon &&
          <img className="btnIcon right" src={btnRightIcon} alt="icon" width="12" height="12" />
        }
      </button>
    </h2>
  )
}
export default PrimaryButton;