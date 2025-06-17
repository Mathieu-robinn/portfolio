export interface Experience{
    company: string,
    emplacement: string,
    period: string,
    duration: string,
    position: string,
    imagePath?: string,
    hoursPerWeek: string,//"Full-time" | "Part-time" | "Casual" | "Contract",
    locationType: "Présentiel" | "Présentiel/Télétravail" | "Télétravail",
    description: string,
    type: string,
    projects?: string[],
}

export interface ExperienceSection {
    sectionTitle: string,
    sectionSubtitle?: string,
    entities: Experience[];
}