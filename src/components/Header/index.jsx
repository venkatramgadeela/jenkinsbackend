import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <div>
        <Navbar expand="md" className="nav-header">
          <NavbarBrand href="/">Tesla</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/mebbackup/">MEB Backup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/mysql-user-access/">MySQL UserCreation</NavLink>
              </NavItem>
              <Dropdown
                onMouseOver={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle nav caret>
                  services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem disabled>Elastic Search</DropdownItem>
                  <DropdownItem disabled>Postgres</DropdownItem>
                  <DropdownItem disabled>Redis</DropdownItem>
                  <DropdownItem disabled>Rabit MQ</DropdownItem>
                  <DropdownItem disabled>Oracle</DropdownItem>
                  <DropdownItem disabled>MongoDB</DropdownItem>
                  <DropdownItem disabled>MSSQL</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>MYSQL</DropdownItem>
                  <Dropdown
                    onMouseOver={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle nav caret>
                      services
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>MSSQL hello</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </DropdownMenu>
              </Dropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contact
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Inqury</DropdownItem>
                  <DropdownItem>Incident</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Oncall</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Admin
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
