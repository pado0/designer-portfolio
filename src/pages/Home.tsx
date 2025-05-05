import "./Home.css";
import {PageProject} from "./PageProject";
import {Header} from "../components/Header.tsx";

export const Home = (): JSX.Element => {
    return (
        <div className="home">
            <Header property1="default"></Header>
            <main className="content">
                <PageProject/>
            </main>
        </div>
    );
};
