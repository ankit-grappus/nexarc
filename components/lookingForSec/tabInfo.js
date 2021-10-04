import NavHeading from "./navHeading";
import TabInnerContent from "./tabInnerContent";

import { tab1Content, tab2Content, tab3Content,serviceOffering } from "./tabData";

export const navItems = [
  {
    navLink:
      <NavHeading
        icon="https://apps.tcsionhub.in/dotcom/staticpages/front-end/static-appcode/nexarc/homepage/images/service-offering/tab1/icon.svg"
        tabName="Grow your business"
      />,
  },
  {
    navLink:
      <NavHeading
        icon="https://apps.tcsionhub.in/dotcom/staticpages/front-end/static-appcode/nexarc/homepage/images/service-offering/tab1/icon.svg"
        tabName="Improve business operations"
      />,
  },
  {
    navLink:
      <NavHeading
        icon="https://apps.tcsionhub.in/dotcom/staticpages/front-end/static-appcode/nexarc/homepage/images/service-offering/tab2/icon.svg"
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