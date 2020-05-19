import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { LoginComponent } from "./modules/login/login.component";
import { ChoosingClassroomComponent } from "./modules/choosing-classroom/choosing-classroom.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { PostsComponent } from "./modules/posts/posts.component";
import { ForumsComponent } from "./modules/forums/forums.component";
import { ModulesComponent } from "./modules/modules/modules.component";
import { ResourcesComponent } from "./modules/resources/resources.component";
import { EvaluationComponent } from "./modules/evaluation/evaluation.component";
import { ThemesComponent } from "./modules/themes/themes.component";
import { AssessmentsComponent } from "./modules/assessments/assessments.component";
import { ProfileDocenteResolver } from "./_resolvers/docente/profile-docente.resolver";
import { AuthDocenteResolver } from "./_resolvers/docente/auth-docente.resolver";
import { ClassroomDocenteResolver } from "./_resolvers/docente/classroom-info-docente.resolver";

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
    path: "",
    component: DefaultComponent,
    resolve: { profile: ProfileDocenteResolver },
    children: [
      {
        path: "dashboard",

        component: DashboardComponent,
      },
      {
        path: "students",
        component: StudentsComponent,
      },
      {
        path: "assistance",
        component: AssistanceComponent,
      },
      {
        path: "qualification",
        component: QualificationComponent,
      },
      {
        path: "forums",
        component: ForumsComponent,
      },
      {
        path: "themes",
        component: ThemesComponent,
      },
      {
        path: "assessments",
        component: AssessmentsComponent,
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
