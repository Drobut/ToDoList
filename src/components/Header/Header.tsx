import logo from "../../assets/images/toDoLogo.png";
import AccountMenu from "../Interface/Profile";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="name">
          <p className="welcome">
            Welcome, <p className="profileNameHeader">Douglas Drobut</p>
          </p>
        </div>
        <div>
          <img className="logoHeader" src={logo} alt="logo" />
        </div>
        <div className="profile">
          <AccountMenu />
        </div>
      </div>
    </>
  );
}
