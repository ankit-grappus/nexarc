// import helmet library
import { Helmet } from "react-helmet";

function PageHelmet(props) {
  return (
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
  )
}

export default PageHelmet;