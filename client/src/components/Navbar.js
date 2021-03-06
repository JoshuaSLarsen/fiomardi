import React from "react";
import { Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    home: false,
    inventory: false,
    scheduleTestDrive: false,
    financing: false,
    specials: false,
    contact: false,
  };

  handleHover = () => {};

  render() {
    return (
      <>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <Menu style={{ backgroundColor: "#001f52" }}>
            <Link to={"/"}>
              <Menu.Item style={{ color: "white" }}>Home</Menu.Item>
            </Link>
            <Link to={"/inventory"}>
              <Menu.Item active style={{ color: "white" }}>
                Inventory
              </Menu.Item>
            </Link>
            <Menu.Item style={{ color: "white" }}>Financing</Menu.Item>
            <Menu.Item style={{ color: "white" }}>Specials</Menu.Item>
            <Menu.Item style={{ color: "white" }}>
              Schedule A Test Drive
            </Menu.Item>
            <Menu.Item style={{ color: "white" }}>Contact</Menu.Item>
            <Menu.Item>
              <Input className="icon" icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu>
        </div>
      </>
    );
  }
}

export default Navbar;

//fiomardicardealership.com
//honda.com
//

// style={{ backgroundColor: "#001f52" }}
