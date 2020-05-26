import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { LoginComponent } from "./modules/login/login.component";
import { ChoosingClassroomComponent } from "./modules/choosing-classroom/choosing-classroom.component";
import { DashboardComponent } from "./modules/home/dashboard/dashboard.component";
import { ForumsComponent } from "./modules/home/forums/forums.component";
//import { ModulesComponent } from "./modules/modules/modules.component";
import { ResourcesComponent } from "./modules/home/resources/resources.component";
import { EvaluationComponent } from "./modules/home/evaluation/evaluation.component";
import { ThemesComponent } from "./modules/home/modules/themes/themes.component";
import { AssessmentsComponent } from "./modules/home/modules/assessments/assessments.component";
import { StudentsComponent } from "./modules/home/my-class/students/students.component";
import { AssistanceComponent } from "./modules/home/my-class/assistance/assistance.component";
import { QualificationComponent } from "./modules/home/my-class/qualification/qualification.component";
import { ProfileDocenteResolver } from "./_resolvers/docente/profile-docente.resolver";
import { AuthDocenteResolver } from "./_resolvers/docente/auth-docente.resolver";
import { ClassroomDocenteResolver } from "./_resolvers/docente/classroom-info-docente.resolver";
import { ThemeContentComponent } from "./modules/home/modules/themes/theme-content/theme-content.component";
import { StudentsGeneralResolver } from './_resolvers/docente/my-class/get-students.resolver';
import { GetThemesTeacherResolver } from './_resolvers/docente/modules/get-themes.resolver';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    resolve: { login: AuthDocenteResolver },
  },
  {
    path: "classroom",
    component: ChoosingClassroomComponent,
    resolve: {
      profile: ProfileDocenteResolver,
      classroom: ClassroomDocenteResolver,
    },
  },  
  {
    path: "teacher/:idCurso",
    component: DefaultComponent,
    resolve: { profile: ProfileDocenteResolver },
    children: [
      
      {
        
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "my-class",
        children:[
          {
            path: "students",
            resolve:{
              students:StudentsGeneralResolver
            },
            component: StudentsComponent,
          },
          {
            path: "attendance",
            component: AssistanceComponent,
          },
          {
            path: "qualification",
            component: QualificationComponent,
          },
        ]
      },
      {
        path: "forums",
        component: ForumsComponent,
      },
      {
        path: "modules",
        children: [
          {
            path: "themes",
            component: ThemesComponent,
            resolve:{
              themes:GetThemesTeacherResolver
            },
            children: [
              {
                path: "theme-content",
                component: ThemeContentComponent,
              },
            ],
          },
          {
            path: "assessments",
            component: AssessmentsComponent,
          },
        ],
      },
      {
        path: "resources",
        component: ResourcesComponent,
      },
      {
        path: "evaluation",
        component: EvaluationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
