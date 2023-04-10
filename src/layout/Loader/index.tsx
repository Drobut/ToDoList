import logo from "../../assets/images/toDoLogo.png";

export default function Loader() {
  return (
    <>
      <div className="loader">
        <img className="logoSpin" src={logo} alt="logo" />
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
