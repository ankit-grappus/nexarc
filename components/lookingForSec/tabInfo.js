import NavHeading from "./navHeading";
import TabInnerContent from "./tabInnerContent";

import { tab1Content, tab2Content, tab3Content } from "./tabData";

export const navItems = [
  {
    navLink:
      <NavHeading
        tabName={0}
      />,
  },
  {
    navLink:
      <NavHeading
        tabName={1}
      />,
  },
  {
    navLink:
      <NavHeading
        tabName={2}
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