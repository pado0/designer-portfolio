import { Gnb } from "../components/Gnb";
import "./Home.css";
import { PageProject } from "./PageProject";

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="gnb-wrapper">
        <Gnb property1="default" />
      </div>
      <div className="content">
        <PageProject />
      </div>
    </div>
  );
};
