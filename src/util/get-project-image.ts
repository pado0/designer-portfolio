import project_1 from "./../assets/project_1.png"
import project_2 from "./../assets/project_2.png"
import project_3 from "./../assets/project_3.png"
import project_4 from "./../assets/project_4.png"
import project_5 from "./../assets/project_5.png"
import project_6 from "./../assets/project_6.png"

export function getProjectImage(imageName: string) {
    switch (imageName) {
        case "project_1":
            return project_1
        case "project_2":
            return project_2
        case "project_3":
            return project_3
        case "project_4":
            return project_4
        case "project_5":
            return project_5
        case "project_6":
            return project_6
    }
}