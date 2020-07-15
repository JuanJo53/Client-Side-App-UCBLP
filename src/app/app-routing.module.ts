import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { LoginComponent } from "./modules/login/login.component";
import { ChoosingClassroomComponent } from "./modules/choosing-classroom/choosing-classroom.component";
import { DashboardComponent } from "./modules/home/dashboard/dashboard.component";

//import { ModulesComponent } from "./modules/modules/modules.component";
import { ResourcesComponent } from "./modules/home/resources/resources.component";
import { EvaluationComponent } from "./modules/home/evaluation/evaluation.component";
import { ThemesComponent } from "./modules/home/modules/themes-base/themes/themes.component";
import { AssessmentsComponent } from "./modules/home/modules/assessments-base/assessments/assessments.component";
import { StudentsComponent } from "./modules/home/my-class/students/students.component";
import { AssistanceComponent } from "./modules/home/my-class/assistance/assistance.component";
import { QualificationComponent } from "./modules/home/my-class/qualification/qualification.component";
import { StudentsProfileComponent } from "./modules/home/my-class/students-profile/students-profile.component";
import { AttendanceScoreComponent } from "./modules/home/my-class/students-profile/scores/attendance-score/attendance-score.component";

import { OthersScoreComponent } from "./modules/home/my-class/students-profile/scores/others-score/others-score.component";
import { ProfileDocenteResolver } from "./_resolvers/docente/profile-docente.resolver";
import { AuthDocenteResolver } from "./_resolvers/docente/auth-docente.resolver";
import { ClassroomDocenteResolver } from "./_resolvers/docente/classroom-info-docente.resolver";
import { ThemeContentComponent } from "./modules/home/modules/themes-base/themes/theme-content/theme-content.component";
import { ThemeLessonsComponent } from "./modules/home/modules/themes-base/themes/theme-lessons/theme-lessons.component";
import { ThemesBaseComponent } from "./modules/home/modules/themes-base/themes-base.component";
import { AssessmentsBaseComponent } from "./modules/home/modules/assessments-base/assessments-base.component";
import { IndividualAssessmentComponent } from "./modules/home/modules/assessments-base/assessments/individual-assessment/individual-assessment.component";

import { DetailAssessmentsComponent } from "./modules/home/modules/assessments-base/assessments/detail-assessments/detail-assessments.component";
import { StudentsGeneralResolver } from "./_resolvers/docente/my-class/get-students.resolver";
import { GetProfileStudentResolver } from "./_resolvers/docente/my-class/get-profile-student.resolver";
import { GetThemesTeacherResolver } from "./_resolvers/docente/modules/get-themes.resolver";
import { GetImagesIdResolver } from "./_resolvers/docente/modules/get_imagesId.resolver";
import { GetFechasAsistenciaResolver } from "./_resolvers/docente/my-class/get-fechas-asistencia.resolver";
import { GetLessonsResolver } from "./_resolvers/docente/modules/themes/get-lessons.resolver";
import { ForumContentComponent } from "./modules/home/forums-base/forums/forum-content/forum-content.component";
import { ForumsComponent } from "./modules/home/forums-base/forums/forums.component";
import { ForumsBaseComponent } from "./modules/home/forums-base/forums-base.component";
import { GetTypeLessonsResolver } from "./_resolvers/docente/modules/themes/get-type-lessons.resolver";
import { GetModulesResolver } from "./_resolvers/docente/evaluation/get_modules.resolver";
import { GetColorsResolver } from "./_resolvers/docente/evaluation/get-colores.resolver";
import { CreatePracticeComponent } from "./modules/home/modules/themes-base/themes/create-practice/create-practice.component";
import { BuildingPageComponent } from "./modules/aux-pages/building-page/building-page.component";
import { GetForumsResolver } from "./_resolvers/docente/forums/get-forums.resolver";
import { GetPracticesResolver } from "./_resolvers/docente/practices/get-practices.resolver";
import { GetResourcesResolver } from "./_resolvers/docente/Resources/get-resources.resolver";
import { GetModulesSimpleResolver } from "./_resolvers/docente/evaluation/get-modules-simple.resolver";
import { CustomModuleBaseComponent } from "./modules/home/modules/custom-module-base/custom-module-base.component";
import { CustomModuleComponent } from "./modules/home/modules/custom-module-base/custom-module/custom-module.component";

const routes: Routes = [
  {
    path: "",

    component: LoginComponent,
    resolve: { login: AuthDocenteResolver },
  },
  {
    path: "building",
    component: BuildingPageComponent,
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
    resolve: {
      profile: ProfileDocenteResolver,
      classroom: ClassroomDocenteResolver,
      modules: GetModulesSimpleResolver,
    },
    children: [
      {
        path: "dashboard",
        // path: "building",
        // component: BuildingPageComponent,
        component: DashboardComponent,
      },
      {
        path: "my-class",
        children: [
          {
            path: "students",
            resolve: {
              students: StudentsGeneralResolver,
            },
            component: StudentsComponent,
          },
          // {
          //   path: "attendance",
          //   resolve: {
          //     fechas: GetFechasAsistenciaResolver,
          //   },
          //   component: AssistanceComponent,
          // },
          {
            path: "profile/:idAlumnoCurso",
            resolve: {
              students: GetProfileStudentResolver,
              colors: GetColorsResolver,
              images: GetImagesIdResolver,
            },
            component: StudentsProfileComponent,
          },
          {
            path: "qualification",
            children: [
              {
                path: "",
                component: QualificationComponent,
              },
              {
                path: "profile-students",
                children: [
                  {
                    path: "",
                    component: StudentsProfileComponent,
                  },
                  {
                    path: "attendance-score",
                    component: AttendanceScoreComponent,
                  },
                  {
                    path: "others-score",
                    component: OthersScoreComponent,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        // path: "forums",
        // component: ForumsComponent,
        path: "forums",
        component: ForumsBaseComponent,
        children: [
          {
            path: "",
            resolve: {
              forums: GetForumsResolver,
            },
            component: ForumsComponent,
          },
          {
            path: ":id",
            component: ForumContentComponent,
          },
        ],
      },
      {
        path: "modules",
        children: [
          {
            path: "",
            component: CustomModuleBaseComponent,
            children: [
              {
                path: "custom/:id",
                component: CustomModuleComponent,
              },
            ],
          },
          {
            path: "themes",
            component: ThemesBaseComponent,
            resolve: {
              themes: GetThemesTeacherResolver,
              images: GetImagesIdResolver,
            },
            children: [
              {
                path: "",
                component: ThemesComponent,
              },
              {
                path: ":idTema",
                children: [
                  {
                    path: "",
                    resolve: {
                      lessons: GetLessonsResolver,
                      images: GetImagesIdResolver,
                      types: GetTypeLessonsResolver,
                    },
                    component: ThemeContentComponent,
                  },
                  {
                    path: ":idLeccion",
                    //component: ThemeLessonsComponent,
                    children: [
                      {
                        path: "",
                        resolve: {
                          practicas: GetPracticesResolver,
                        },
                        runGuardsAndResolvers: "always",
                        component: ThemeLessonsComponent,
                      },
                      {
                        path: "practice",
                        component: CreatePracticeComponent,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: "assessments",
            component: AssessmentsBaseComponent,
            children: [
              {
                path: "",
                component: AssessmentsComponent,
              },
              {
                path: "detail",
                children: [
                  {
                    path: "",
                    component: DetailAssessmentsComponent,
                  },
                  {
                    path: "individual-test",
                    component: IndividualAssessmentComponent,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "resources",
        component: ResourcesComponent,
        runGuardsAndResolvers: "always",
        resolve: {
          sections: GetResourcesResolver,
        },
      },
      {
        path: "evaluation",
        component: EvaluationComponent,
        resolve: {
          modules: GetModulesResolver,
          colors: GetColorsResolver,
          images: GetImagesIdResolver,
        },
      },
    ],
  },
  {
    path: "**",
    redirectTo: "building",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
