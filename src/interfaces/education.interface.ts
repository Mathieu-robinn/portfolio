export interface Education {
    diploma: string,
    establishment: string,
    emplacement: string,
    imagePath?: string,
    period: string,
    decription: string,
    

}

export interface EducationSection {
    sectionTitle: string,
    sectionSubtitle?: string,
    entities: Education[];
}