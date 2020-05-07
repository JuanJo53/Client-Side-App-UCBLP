import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { LoginComponent } from "./modules/login/login.component";
import { ChoosingClassroomComponent } from "./modules/choosing-classroom/choosing-classroom.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { PostsComponent } from "./modules/posts/posts.component";
import { MyClassComponent } from "./modules/my-class/my-class.component";
import { ForumsComponent } from "./modules/forums/forums.component";
import { ModulesComponent } from "./modules/modules/modules.component";
import { ResourcesComponent } from "./modules/resources/resources.component";
import { EvaluationComponent } from "./modules/evaluation/evaluation.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "classroom", component: ChoosingClassroomComponent },
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "myclass",
        component: MyClassComponent,
      },
      {
        path: "forums",
        component: ForumsComponent,
      },
      {
        path: "modules",
        component: ModulesComponent,
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
