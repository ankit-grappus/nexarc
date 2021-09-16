import NavHeading from "./navHeading";
import TabInnerContent from "./tabInnerContent";

import { tab1Content, tab2Content, tab3Content } from "./tabData";

export const navItems = [
  {
    navLink:
      <NavHeading
        icon="../../static/assets/images/icons/icon-stocks-up.svg"
        tabName="Grow your business"
      />,
  },
  {
    navLink:
      <NavHeading
        icon="../../static/assets/images/icons/icon-settings.svg"
        tabName="Improve business operations"
      />,
  },
  {
    navLink:
      <NavHeading
        icon="../../static/assets/images/icons/icon-book-person.svg"
        tabName="Learn & stay updated"
      />,
  },
]

export const tabContents = [
  {
    tabContent:
      <TabInnerContent
        details={tab1Content}
      />
  },
  {
    tabContent:
      <TabInnerContent
        details={tab2Content}
      />
  },
  {
    tabContent:
      <TabInnerContent
        details={tab3Content}
      />
  },
]