// styles
import "./styles.scss";

function PrimaryButton({ className, onClick, disabled, type, buttonName, btnLeftIcon, btnRightIcon,nxClickEvent }) {
  return (
    <>
      <button
        className={`button ${className}`}
        onClick={onClick}
        disabled={disabled}
        type={type}
        nx-click-event={nxClickEvent}
      >
        {btnLeftIcon &&
          <img className="btnIcon left" src={btnLeftIcon} alt="icon" width="12" height="12" />
        }
        {buttonName}
        {btnRightIcon &&
          <img className="btnIcon right" src={btnRightIcon} alt="icon" width="12" height="12" />
        }
      </button>
    </>
  )
}
export default PrimaryButton;