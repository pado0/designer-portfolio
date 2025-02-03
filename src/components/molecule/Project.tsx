import {getProjectImage} from "../../util/get-project-image.ts";
import "./Project.css"

interface ProjectProps {
    title: string;
    imageName: string;
    tagList: string[];
}

const Project = ({
                     title,
                     imageName,
                     tagList,
                 }: ProjectProps) => {
    return <div className="Project">
        <img src={getProjectImage(imageName)} alt="project image"/>
        <div className="ProjectInformation">
            <div className="Title">{title}</div>
            <div className="TagList">
                {tagList.map((item, index) => (
                    <div className="Tag" key={index}>{item}</div>
                ))}
            </div>
        </div>
    </div>
}

export default Project