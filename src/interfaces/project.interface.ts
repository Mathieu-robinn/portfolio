import { Skill } from "./skill-interface";

export interface Project {
    projectName: string,
    description: string,
    imagePath?: string,
    skills: string[],
    
}

export interface ProjectSection {
    sectionTitle: string,
    sectionSubtitle?: string,
    entities: Project[];
}