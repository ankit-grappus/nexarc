// styles
import "./styles.scss"
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { navItems, tabContents } from "./tabInfo";

function LookingForSec({ secHeading }) {
  return (
    <>
      <div className="looking-for-block">
        <div className="heading">{secHeading}</div>
        <div className="vertical-navbar-box">
          <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Nav variant="pills" className="flex-column vertical-tabs">
                  {navItems.map((item, index) => {
                    return (
                      <Nav.Item>
                        <Nav.Link eventKey={index}>{item.navLink}</Nav.Link>
                      </Nav.Item>
                    )
                  })}
                </Nav>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8}>
                <Tab.Content>
                  {tabContents.map((item, index) => {
                    return (
                      <Tab.Pane eventKey={index}>
                        {item.tabContent}
                      </Tab.Pane>
                    )
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  )
}
export default LookingForSec;