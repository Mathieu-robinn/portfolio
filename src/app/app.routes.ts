import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ErrorComponent } from './pages/error/error.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { EducationComponent } from './pages/education/education.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RouteData } from '../interfaces/routes.interface';
import { AppRoutes } from '../enums/routes-data.enum';
import { SkillsComponent } from './pages/skills/skills.component';
export const routes: Routes = [
    {path: AppRoutes.HOME, component: HomeComponent},
    {path: AppRoutes.EXPERIENCE, component: ExperienceComponent},
    {path: AppRoutes.PROJECTS, component: ProjectsComponent},
    {path: AppRoutes.EDUCATION, component: EducationComponent},
    {path: AppRoutes.ACHIEVEMENTS, component: AchievementsComponent},
    {path: AppRoutes.SKILLS, component: SkillsComponent},
    {path: "**", redirectTo: "error"},
    {path: AppRoutes.ERROR, component: ErrorComponent}
]


