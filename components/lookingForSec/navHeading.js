import { useEffect, useState } from "react";
// styles
import "./styles.scss"

function NavHeading({ tabName }) {
  const [serviceOffering, setServiceOffering] = useState([])
  const fetchServiceOffering = async () => {
    await fetch('https://www.nexarc.in/nexarc/GetHomepageDataForGrappus').then(data => {
      return data.json();
      })
      .then(post => {setServiceOffering(post)}); 
  }
  useEffect(() => {
    fetchServiceOffering();
  }, []);
  return (
    <>
      <div className="nav-heading fx fx--ai-c w-100" >
        {/* <img className="tab-icon mr--10" src={serviceOffering['service-offering'][tabName]?.icon != "undefined"? serviceOffering['service-offering'][tabName]?.icon:""} alt="icon" width="24" height="24" />
        <div className="tab-name">{serviceOffering['service-offering'][tabName]?.label != "undefined" ? serviceOffering['service-offering'][tabName]?.label:""}</div> */}
      </div>
    </>
  )
}
export default NavHeading;
