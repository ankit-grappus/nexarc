import iconTelephone from "../../static/assets/images/icons/icon-telephone.svg";
import iconEnvelope from "../../static/assets/images/icons/icon-envelope.svg";
import iconWhatsapp from "../../static/assets/images/icons/icon-whatsapp.svg";
import iconFb from "../../static/assets/images/social/icon-fb.png";
import iconInstagram from "../../static/assets/images/social/icon-instagram.png";
import iconYoutube from "../../static/assets/images/social/icon-youtube.png";
import iconTwitter from "../../static/assets/images/social/icon-twitter.png";
import iconLinkedin from "../../static/assets/images/social/icon-linkedin.png"

// company routes
export const companyRoutes = [
  {
    link: "https://www.nexarc.in/about-us/",
    routeName: "About Tata Business Hub",
    nxClickEvent: "NXA_FT_COM_ABOUT"
  },
  {
    link: "#",
    routeName: "Careers",
    nxClickEvent: "NXA_FT_COM_CAREER"
  },
  {
    link: "#",
    routeName: "Upcoming Features",
    nxClickEvent: "NXA_FT_COM_FEATURE"
  },
  {
    link: "#",
    routeName: "Sitemap",
    nxClickEvent: "NXA_FT_COM_SITEMAP"
  },
]

// contact us
export const contactUs = [
  {
    contactUsIcon: iconTelephone,
    iconTitle: "Call",
    link: "tel:+91-902-211-2299",
    routeName: "+91-902-211-2299",
    nxClickEvent: "NXA_FT_CONTACT_CALL"
  },
  {
    contactUsIcon: iconEnvelope,
    iconTitle: "Mail",
    link: "mailto:support@nexarc.in",
    routeName: "support@nexarc.in",
    nxClickEvent: "NXA_FT_CONTACT_EMAIL"
  },
  {
    contactUsIcon: iconWhatsapp,
    iconTitle: "WhatsApp",
    link: "https://wa.me/919022338000/?text=Hi Nexarc, Whatsup",
    routeName: "+91-902-233-8000",
    nxClickEvent: "NXA_FT_CONTACT_WHATSAPP"
  },
]

// legal routes
export const legalRoutes = [
  {
    link: "https://www.nexarc.in/support/",
    routeName: "Support services",
    nxClickEvent: "NXA_FT_LEGAL_SUPPORT"
  },
  {
    link: "https://www.nexarc.in/software-used/",
    routeName: "Softwares used",
    nxClickEvent: "NXA_FT_LEGAL_SOFTWARE"
  },
  {
    link: "https://www.nexarc.in/copy-right-infringement/",
    routeName: "Report copyright infringement",
    nxClickEvent: "NXA_FT_LEGAL_COPYRIGHT"
  },
  {
    link: "https://www.nexarc.in/privacy-and-terms/",
    routeName: "Privacy & Terms",
    nxClickEvent: "NXA_FT_LEGAL_PRIVACY"
  },
  {
    link: "#",
    routeName: "Cookie Policy",
    nxClickEvent: "NXA_FT_LEGAL_COOKIE"
  },
]

// find opportunities routes
export const findOpportunitiesRoutes = [
  {
    link: "https://www.nexarc.in/tender-and-quotations/",
    routeName: "Tenders & Quotations",
    nxClickEvent: "NXA_FT_OPP_TENDER"
  },
  {
    link: "https://www.nexarc.in/business/",
    routeName: "Business Connections",
    nxClickEvent: "NXA_FT_OPP_BIZ"
  },
  // {
  //   link: "#",
  //   routeName: "Get Tata Verified"
  // },
]

// Get Financing routes
export const getFinancingRoutes = [
  {
    link: "#",
    routeName: "Credit Cards",
    nxClickEvent: ""
  },
  {
    link: "#",
    routeName: "Business Loans",
    nxClickEvent: ""
  },
  {
    link: "#",
    routeName: "Bill Discounting",
    nxClickEvent: ""
  },
]

// Get Solutions routes
export const getSolutionsRoutes = [
  {
    link: "https://www.nexarc.in/product-services/",
    routeName: "Apps & Solutions",
    nxClickEvent: "NXA_FT_SOL_APP"
  },
  // {
  //   link: "#",
  //   routeName: "Managed Services"
  // },
]

// Find Experts routes
// export const findExpertsRoutes = [
//   {
//     link: "#",
//     routeName: "nexTalks"
//   },
//   {
//     link: "#",
//     routeName: "nexConsult"
//   },
// ]

// Get Skilled routes
export const getSkilledRoutes = [
  {
    link: "https://www.nexarc.in/learning/",
    routeName: "nexLearn",
    nxClickEvent: "NXA_FT_SKILL_NEXLEARN"
  },
]

// Stay Updated routes
export const stayUpdatedRoutes = [
  {
    link: "https://www.nexarc.in/insights/",
    routeName: "Info Hub",
    nxClickEvent: "NXA_FT_UPDATE_INFOHUB"
  },
  {
    link: "#",
    routeName: "nexTalks",
    nxClickEvent: "NXA_FT_UPDATE_NEXTALKS"
  },
]

// social media icons
export const socialIcons = [
  {
    link: "#",
    socialSrc: iconFb,
    alt: "facebook icon",
    nxClickEvent: "NXA_FT_ICON_FB"
  },
  {
    link: "#",
    socialSrc: iconInstagram,
    alt: "instagram icon",
    nxClickEvent: "NXA_FT_ICON_INSTA"
  },
  {
    link: "#",
    socialSrc: iconLinkedin,
    alt: "linkedin icon",
    nxClickEvent: "NXA_FT_ICON_LKD"
  },
  {
    link: "#",
    socialSrc: iconYoutube,
    alt: "youtube icon",
    nxClickEvent: "NXA_FT_ICON_YT"
  },
  {
    link: "#",
    socialSrc: iconTwitter,
    alt: "twitter icon",
    nxClickEvent: "NXA_FT_ICON_TWT"
  },
]