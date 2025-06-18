import { RouteData } from "../interfaces/routes.interface";

export enum AppRoutes {
    HOME = "",
    ERROR = "error",
    EXPERIENCE = "experience",
    EDUCATION = "education",
    PROJECTS = "projects",
    ACHIEVEMENTS = "achievements",
    SKILLS= "skills"
}


export const RoutesData: RouteData[] = [
    {
        routeName: "Home",
        routeUrl: AppRoutes.HOME,
        visible: true,
    },
    {
        routeName: "Projects",
        routeUrl: AppRoutes.PROJECTS,
        visible: true,
    },
    {
        routeName: "Compétences",
        routeUrl: AppRoutes.SKILLS,
        visible: true,
    },
    {
        routeName: "Experience",
        routeUrl: AppRoutes.EXPERIENCE,
        visible: true,
    },
    {
        routeName: "Education",
        routeUrl: AppRoutes.EDUCATION,
        visible: true,
    },
    
    // {
    //     routeName: "Achievements",
    //     routeUrl: AppRoutes.ACHIEVEMENTS,
    //     visible: true,
    // },
    {
        routeName: "Error",
        routeUrl: AppRoutes.ERROR,
        visible: false,
    },
]