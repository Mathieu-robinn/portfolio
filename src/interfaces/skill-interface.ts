import { Project } from "./project.interface";

export interface Skill {
    skillName: string,
    imagePath: string,
    projects: string[],
    
}

export interface SkillSection {
    sectionTitle: string,
    sectionSubtitle?: string,
    entities: Skill[];
}