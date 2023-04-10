import logo from "../../assets/images/toDoLogo.png";
import { ReactComponent as Trees } from "../../assets/images/design.svg";

interface ContentProps {
  title?: string;
  subTitle?: string;
  description?: string;
}

export default function Content({
  title,
  subTitle,
  description,
}: ContentProps) {
  return (
    <>
      <div className="contentTable">
        <div className="to-do">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="titles">{title}</h1>
          <h1 className="titles">{subTitle}</h1>
          <p className="subTitles">{description}</p>
        </div>
        <div className="backgroundTrees">
          <Trees />
        </div>
      </div>
    </>
  );
}
