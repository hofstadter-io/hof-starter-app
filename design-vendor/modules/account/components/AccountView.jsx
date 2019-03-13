import React from 'react';
import ReactDOM from 'react-dom';

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import AccountAuth from '../account/components/AccountAuth';

export default class Designer extends React.Component {
  state = {
    activeTab: "account"
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentDidUpdate(props) { }

  render() {
    console.log("AccountView", this.props, this.state)
    return (

      <div id="account-view">
        <Row>
          <Col xs="12" sm="2">
            <div id="account-navs" className="nav flex-column" aria-orientation="vertical">

              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === 'account' })}
                  onClick={() => { this.toggle('account'); }}
                >
                  Account
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === 'auth' })}
                  onClick={() => { this.toggle('auth'); }}
                >
                  Auth
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === 'billing' })}
                  onClick={() => { this.toggle('billing'); }}
                >
                  Billing
                </NavLink>
              </NavItem>

            </div>
          </Col>

          <Col xs="12" sm="10">
            <TabContent activeTab={this.state.activeTab}>

              <TabPane tabId="account" id="account-overview">
                <Row>
                  <Col sm="12">
                    Account
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="auth" id="account-auth">
                <Row>
                  <Col sm="12">
                    <AccountAuth />
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="billing" id="account-billing">
                <Row>
                  <Col sm="12">
                    Billing
                  </Col>
                </Row>
              </TabPane>

            </TabContent>
          </Col>
        </Row>
      </div>

    );
  }
}

