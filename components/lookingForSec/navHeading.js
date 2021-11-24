// styles
import "./styles.scss"

function NavHeading({ icon, tabName,nxEventClick }) {
  return (
    <>
      <div className="nav-heading fx fx--ai-c w-100" >
        <img className="tab-icon mr--10" src={icon} alt="icon" width="24" height="24" />
        <div className="tab-name">{tabName}</div>
      </div>
    </>
  )
}
export default NavHeading;
