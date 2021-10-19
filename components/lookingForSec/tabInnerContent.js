// styles
import "./styles.scss"

function TabInnerContent({ details }) {
  return (
    <>
      <div className="tab-content-block">
        {details.map((item, index) => {
          return (
            <>
              <a className="link" href={item.link} key={index} nx-click-event={item.nxClickEvent}>
                <img className="item-img" src={item.itemImg} alt="item" width="100%" height="100%" />
                <div className="item-name-box fx fx--ai-c fx--jc-sb mt--15">
                  <div className="item-name">{item.itemName}</div>
                  <img className="icon-right" src="../../static/assets/images/icons/icon-arrow-rt-circle.svg" alt="icon-right" width="32" height="32" />
                </div>
              </a>
            </>
          )
        })}
      </div>
    </>
  )
}
export default TabInnerContent;