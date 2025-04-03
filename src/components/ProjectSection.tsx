import "./FeaturedWork.css"
import {ProjectSectionProps} from "./dto/Props.tsx";
import Project from "./molecule/Project.tsx";
import './ProjectSection.css'

const ProjectSection = ({title, description, projectList}: ProjectSectionProps) => {
    return (
        <div className="ProjectSection">
            <div className="FullTitle">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            {projectList.map((item, index) => (
                <Project key={index}
                         imageName={item.imageName}
                         title={item.title}
                         tagList={item.tagList}>
                </Project>
            ))}
        </div>
    )
}

export default ProjectSection;