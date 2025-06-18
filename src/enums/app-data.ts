import { Education } from "../interfaces/education.interface"
import { Experience, ExperienceSection } from "../interfaces/experience.interface"
import { Project, ProjectSection } from "../interfaces/project.interface"
import { SkillSection } from "../interfaces/skill-interface"

//Education
const Lycée : Education = {
    diploma: "Bac Général",
    establishment: "Lycée Immaculée Concpetion",
    emplacement: "Villeurbanne, 69100",
    imagePath: "https://media.licdn.com/dms/image/v2/C5603AQGM8zMqpotLGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1572972876231?e=1753315200&v=beta&t=Z1jsVe0SL_I630X_LpqcY2DUlRJlGABMfB21RydrS8o",
    period: "2019/2023",
    decription: "Bac Général mention Bien, Specialités Mathématiques et NSI, Section Européenne en Allemand",
}

const BUT : Education = {
    diploma: "BUT Informatique",
    establishment: "IUT Lyon 1",
    emplacement: "Villeurbanne, 69100",
    imagePath: "https://media.licdn.com/dms/image/v2/D4E0BAQE8WWBChry7zg/company-logo_200_200/company-logo_200_200/0/1729258525016/iut_lyon_1_logo?e=1753315200&v=beta&t=XtZf4t9HqAivIv7Tl1sUReI1PNsSCMKzvrsuTabkL-k",
    period: "2023/2025",
    decription: "BUT Infformatique, Parours Réalisation d'Applications"
}

// const Ingénieur : Education = {
//     diploma: string,
//     establishment: string,
//     emplacement: string,
//     imagePath?: string,
//     period: string,
// }


//Experience

const ProgrammationSection : SkillSection = {
    sectionTitle: "Fullstack Development",
    sectionSubtitle: "Mes compétences/ connaissances en FrontEnd",
    entities: [
        {
            skillName: "HTML/CSS",
            imagePath: "https://ostraining.com/wp-content/uploads/coding/html5-css3-hd.jpg",
            projects: [
                "PlayNWin","Liste2Courses","Synchronisation_Outlook","Google_Maps",

            ],
        },
        {
            skillName: "Javascript",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            projects: [
                "PlayNWin",

            ],
        },
        {
            skillName: "Vue.js",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
            projects: [
                

            ],
        },
        {
            skillName: "Angular",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png",
            projects: [
                "Synchronisation_Outlook","Google_Maps",

            ],
        },
        {
            skillName: "PHP",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
            projects: [
                "PlayNWin","Liste2Courses",

            ],
        },
        {
            skillName: "Symphony",
            imagePath: "https://www.josh-digital.com/wp-content/uploads/2019/05/Symfony-4-API-Platform-React.js-Full-Stack-Masterclass.jpg",
            projects: [
                "Liste2Courses",

            ],
        },
        {
            skillName: ".NET",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png",
            projects: [
                "Synchronisation_Outlook","Google_Maps",

            ],
        },
        {
            skillName: "C",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png",
            projects: [
                

            ],
        },
        {
            skillName: "Python",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
            projects: [
                

            ],
        },
        {
            skillName: "Java",
            imagePath: "https://images.itnewsinfo.com/lmi/articles/grande/000000058700.jpg",
            projects: [
                "FlyPlane",

            ],
        }
    ]
}

const BDSection : SkillSection = {
    sectionTitle: "Base de données",
    sectionSubtitle: "Mes compétences/ connaissances en base de données",
    entities: [
        {
            skillName: "SQL",
            imagePath: "https://modern-ti.com/wp-content/uploads/2024/01/sql-database-generic.png",
            projects: [
                "PlayNWIn","Liste2Courses","Synchronisation_Outlook","Google_Maps",

            ],
        },
        
        {
            skillName: "NoSQL",
            imagePath: "https://www.okoone.com/wp-content/uploads/2024/04/no-sql-logo.png",
            projects: [
                

            ],
        },
        {
            skillName: "PowerBi",
            imagePath: "https://media.datacamp.com/legacy/v1724169856/image_ff55d03003.png",
            projects: [
                

            ],
        }
    ]
}
const NetworkSection : SkillSection=  {
    sectionTitle: "Réseau",
    sectionSubtitle: "Mes compétences/ connaissances en Réseau",
    entities: [
        {
            skillName: "configuration de routeurs Cisco",
            imagePath: "https://www.cisco.com/c/dam/assets/support/product-images/series/routers-asr-901-10g-series-aggregation-services-routers.jpg",
            projects: [

            ],
        },
        {
            skillName: "routage statique/dynamique",
            imagePath: "https://d33wubrfki0l68.cloudfront.net/27c38623ef683486ad6f0cdc7c3b29617b180008/37dfe/assets/images/ccna/lucidchart/f716b3b6-dace-4d07-af2a-97731df02310.png",
            projects: [

            ],
        },
        {
            skillName: "Modèle OSI",
            imagePath: "https://bmskaren.ir/wp-content/uploads/2020/11/bmskaren-85-1.png",
            projects: [

            ],
        },
        {
            skillName: "Azure",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
            projects: [
                "Synchronisation_Outlook",
            ],
        },
    ]
}

const ExploitationSystemeSection : SkillSection=  {
    sectionTitle: "Systèmes d'exploitation",
    sectionSubtitle: "Mes compétences/ connaissances en système d'exploitation",
    entities: [
        {
            skillName: "Linux",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png",
            projects: [

            ],
        },{
            skillName: "Windows",
            imagePath: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-windows-10-window-logo-RW19Kuy?scl=1",
            projects: [

            ],
        },
    ]
}


const GestionProketSection : SkillSection=  {
    sectionTitle: "Gestion de projets",
    sectionSubtitle: "Mes compétences/ connaissances en gestion de projets",
    entities: [
        {
            skillName: "méthodes agiles (Scrum, Kanban)",
            imagePath: "https://sesin.fr/wp-content/uploads/2016/02/graphique_agile-1.png",
            projects: [
                "PlayNWIn",
            ],
        },{
            skillName: "Git",
            imagePath: "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/10/formation-git.png",
            projects: [
                "PlayNWIn","Liste2Courses","FlyPlane","Synchronisation_Outlook","Google_Maps",
            ],
        },
    ]
}


const IUTSection : SkillSection=  {
    sectionTitle: "Compétences du BUT Informatique",
    sectionSubtitle: "Mes compétences/ connaissances en gestion de projets",
    entities: [
        {
            skillName: "Réaliser",
            imagePath: "https://f.hellowork.com/helloworkplace/2021/01/inadequation-competences.jpg",
            projects: [
                "PlayNWIn","Liste2Courses","FlyPlane","Synchronisation_Outlook","Google_Maps"
            ],
        },{
            skillName: "Optimiser",
            imagePath: "https://f.hellowork.com/helloworkplace/2021/01/inadequation-competences.jpg",
            projects: [
                "PlayNWIn","Liste2Courses","FlyPlane","Synchronisation_Outlook","Google_Maps",
            ],
        },
        {
            skillName: "Administrer",
            imagePath: "https://f.hellowork.com/helloworkplace/2021/01/inadequation-competences.jpg",
            projects: [
                "PlayNWIn","Liste2Courses","Synchronisation_Outlook","Google_Maps",
            ],
        },{
            skillName: "Gérer",
            imagePath: "https://f.hellowork.com/helloworkplace/2021/01/inadequation-competences.jpg",
            projects: [
                "PlayNWIn","Liste2Courses","FlyPlane","Synchronisation_Outlook","Google_Maps",
            ],
        },
        {
            skillName: "Conduire",
            imagePath: "https://f.hellowork.com/helloworkplace/2021/01/inadequation-competences.jpg",
            projects: [
                "PlayNWIn","Liste2Courses","FlyPlane"
            ],
        },{
            skillName: "Collaborer",
            imagePath: "https://f.hellowork.com/helloworkplace/2021/01/inadequation-competences.jpg",
            projects: [
                "PlayNWIn","Liste2Courses","FlyPlane",
            ],
        },
    ]
}



// const OthersSection : SkillSection=  {
//     sectionTitle: "Autres",
//     sectionSubtitle: "Mes autres compétences/ connaissances",
//     entities: [

//     ]
// }


const PersonalProjects : ProjectSection=  {
    sectionTitle: "Personnal Projects",
    sectionSubtitle: "Mes projets professionnels",
    entities: [
        {
            projectName: "PlayNWIn",
            description: "Site Web simulant un site de paris sportifs avec matchs, scores et côtes en direct. Site disponible à cette adresse: playnwin.games.",
            imagePath: "PlayNWin.png",
            skills: [
                "HTML/CSS","Javascript","PHP","SQL","Git","Réaliser","Optimiser","Administrer","Gérer","Conduire","Collaborer",
            ],
        },
        {
            projectName: "Liste2Courses",
            description: "Site en PHP/Symfony permettant d’effectuer des listes de courses communes",
            imagePath: "https://www.tutoderien.com/wp-content/uploads/2020/05/image006.jpg",
            skills: [
                "HTML/CSS","PHP","Symphony","SQL","Git","Réaliser","Optimiser","Administrer","Gérer","Conduire","Collaborer",
            ],
        },
        {
            projectName: "FlyPlane",
            description: "Application Java + Swing traitant des données d’un graphe mathématique dans le but de déterminer des chemins optimaux",
            imagePath: "FlyPlane.png",
            skills: [
                "Java","Git","Réaliser","Optimiser","Gérer","Conduire","Collaborer",
            ],
        },
        {
            projectName: "Synchronisation_Outlook",
            description: "Réalisation d’un système complet de synchronisation unidirectionnelle entre un CRM et Outlook via l’API Microsoft Graph, avec gestion des tokens, utilisation des métadonnées, catégorisation des événements, et respect strict du RGPD pour garantir la confidentialité des données utilisateurs.",
            imagePath: "Outlook.png",
            skills: [
                "HTML/CSS","Angular",".NET","SQL","Azure","Git","Réaliser","Optimiser","Administrer","Gérer","Conduire",
            ],
        },
        {
            projectName: "Google_Maps",
            description: "Conception d'un module cartographique dynamique intégrant Google Maps avec géocodage massif de plus de 6000 adresses, calcul de distances via fonctions mathématiques backend, filtrage spatial optimisé en base de données, recherche avec autocomplétion et affichage interactif des entreprises sur la carte.",
            imagePath: "Maps.png",
            skills: [
                "HTML/CSS","Angular",".NET","SQL","Git","Réaliser","Optimiser","Administrer","Gérer","Conduire",
            ],
        },
    ]
}

const JobExperience : ExperienceSection = {
    sectionTitle: "Experience",
    sectionSubtitle: "Mes expériences professionnelles",
    entities: [
        {
            company: "ONYX",
            emplacement: "Bron",
            period: "2025",
            duration: "12 semaines",
            position: "Développeur Full-Stack",
            imagePath: "https://media.licdn.com/dms/image/v2/C4D0BAQH86cQfQOUnaA/company-logo_200_200/company-logo_200_200/0/1630552186338/1edocbyonyx_logo?e=1753315200&v=beta&t=v6Qoe0eFaDlO5PyQRRfDACDnh7L1fEStv7C7YL5sxp0",
            hoursPerWeek: "35",
            locationType: "Présentiel" ,
            description: "developpement de modules de l'entreprise en C# et .NET",
            type: "stage",
            projects: [
                "SyncronisationOutlook",
                "GoogleMaps"
            ]
        },
        {
            company: "McDonald's",
            emplacement: "Vaulx-en-Velin",
            period: "2023",
            duration: "4 mois",
            position: "équipier polyvalent",
            imagePath: "https://media.licdn.com/dms/image/v2/C4E0BAQHWxquJ9PJxvw/company-logo_200_200/company-logo_200_200/0/1630594652024/mcdonalds_corporation_logo?e=1753315200&v=beta&t=F-I0G8AymoDkyJrwULgNWtJ00Oqajm3WyQjPQjGVCvE",
            hoursPerWeek: "10",
            locationType: "Présentiel",
            description: "En tant qu’employé polyvalent chez McDonald’s, je participe activement au bon fonctionnement du restaurant. Je suis capable d’occuper plusieurs postes selon les besoins : à la caisse, en cuisine, au drive ou en salle.",
            type: "CDI",
        }

    ]
}




export const AppConfig = {

    name: "Robin Mathieu",             // your name
    emailId: "robi69100@gmail.com",  // your email id

    // Google Form Contact Link
    googleFormContactLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMOsQhl_Lci5s_qrYN-LEWlJ3NoBag-Uyf17IGktExA5KDpw/viewform?usp=header", //TODO à faire

    PresentationText:  "",//TODO

    // Skills page
    skillsPageTitle: "Mes Compétences",    // Title of projects page
    skillsPageDescription: "Mes compétences à travers différents domaines",
    skillsSections: [                         
        ProgrammationSection,
        BDSection,
        NetworkSection,
        ExploitationSystemeSection,
        GestionProketSection,
        IUTSection,
        //OthersSection,

    ],
    
    // Projects page
    projectsPageTitle: "Mes projets",    // Title of projects page
    projectsPageDescription: "Différents projets que j'ai pu réaliser personnellement, en entreprise ou encore pendant mes études ",
    projectSections: [                  // Define and add a custom section if needed
        PersonalProjects,
    ],
    
    // Experience page
    experiencePageTitle: "Mon Expérience",
    experiencePageDescription: "Les différents postes que j'ai occuppé tout au long de ma carrière",
    experienceSections: [
        JobExperience,
    ],

    // Education page
    educationPageTitle: "Mon Education",
    educationPageDescription: "Les différentes formations que j'ai suivies",
    educationSections: [
        Lycée,
        BUT,
    ],

    // // Achievements Page
    // achievementsPageTitle: "Achievements, Participation and Community Involvement",
    // achievementsPageDescription: "🚀 Milestones, Contributions & Impact: Driving Innovation, Engaging Communities, and Making a Difference 🌍",
    // achievementsSections: [
    //     AchievementInvolvement,
    //     CommunityInvolvement,
    // ],

}
