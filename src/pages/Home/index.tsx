import Content from "../../components/Content/index.";
import Login from "../../components/Login";

export default function Home() {
  return (
    <>
      <div className="layoult">
        <Content
          title="To-Do"
          description="A web application to simplify your ideas.."
          subTitle="Solutions for ideas"
        />
        <Login />
      </div>
    </>
  );
}
