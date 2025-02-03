export interface ProjectSectionProps {
    title: string;
    description: string;
    projectList: {
        title: string;
        imageName: string;
        tagList: string[]; // <-- Ensure it's an array
    }[];
}
