import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { LoginComponent } from "src/app/modules/login/login.component";
import { ChoosingClassroomComponent } from "src/app/modules/choosing-classroom/choosing-classroom.component";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SharedModule } from "src/app/shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ThemesComponent } from "src/app/modules/home/modules/themes-base/themes/themes.component";
import { DeleteCardComponent } from "src/app/modules/dialogs/delete-card/delete-card.component";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { StudentsComponent } from "src/app/modules/home/my-class/students/students.component";
import { AssistanceComponent } from "src/app/modules/home/my-class/assistance/assistance.component";
import { QualificationComponent } from "src/app/modules/home/my-class/qualification/qualification.component";
import { AddThemeComponent } from "src/app/modules/dialogs/themes/add-theme/add-theme.component";
import { AddStudentComponent } from "src/app/modules/dialogs/students/add-student/add-student.component";
import { EditStudentComponent } from "src/app/modules/dialogs/students/edit-student/edit-student.component";
import { DashboardComponent } from "src/app/modules/home/dashboard/dashboard.component";
import { EvaluationComponent } from "src/app/modules/home/evaluation/evaluation.component";
import { ForumsComponent } from "src/app/modules/home/forums-base/forums/forums.component";
import { ResourcesComponent } from "src/app/modules/home/resources/resources.component";
import { AssessmentsComponent } from "src/app/modules/home/modules/assessments/assessments.component";
import { ThemeLessonsComponent } from "src/app/modules/home/modules/themes-base/themes/theme-lessons/theme-lessons.component";
import { ThemeContentComponent } from "src/app/modules/home/modules/themes-base/themes/theme-content/theme-content.component";
import { ThemesBaseComponent } from "src/app/modules/home/modules/themes-base/themes-base.component";
import { ConfigureThemeComponent } from "src/app/modules/dialogs/themes/configure-theme/configure-theme.component";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { ForumsBaseComponent } from "src/app/modules/home/forums-base/forums-base.component";
import { ForumContentComponent } from "src/app/modules/home/forums-base/forums/forum-content/forum-content.component";
import { InitialInformationComponent } from "src/app/modules/dialogs/create-practice/initial-information/initial-information.component";
import { AddForumComponent } from "src/app/modules/dialogs/forums/add-forum/add-forum.component";
import { CdkTableModule } from "@angular/cdk/table";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { EditForumComponent } from "src/app/modules/dialogs/forums/edit-forum/edit-forum.component";
import { MatNativeDateModule } from "@angular/material/core";
import { MatStepperModule } from "@angular/material/stepper";
import { ReactiveFormsModule } from "@angular/forms";
import { AddLessonComponent } from "src/app/modules/dialogs/lesson/add-lesson/add-lesson.component";
import { ConfigureLessonComponent } from "src/app/modules/dialogs/lesson/configure-lesson/configure-lesson.component";
import { ErrorDialogComponent } from "src/app/modules/dialogs/simple-dialogs/error-dialog/error-dialog.component";
import { CreatePracticeComponent } from "src/app/modules/home/modules/themes-base/themes/create-practice/create-practice.component";
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ViewResponseComponent} from "src/app/modules/dialogs/forums/view-response/view-response.component";
import { AddCustomModuleComponent } from 'src/app/modules/dialogs/evaluation/add-custom-module/add-custom-module.component';
import { EditDefaultModuleComponent } from 'src/app/modules/dialogs/evaluation/edit-default-module/edit-default-module.component';
import { EditCustomModuleComponent } from 'src/app/modules/dialogs/evaluation/edit-custom-module/edit-custom-module.component';
import { ModulesRubricComponent } from 'src/app/modules/dialogs/evaluation/modules-rubric/modules-rubric.component';
import { BuildingPageComponent } from 'src/app/modules/aux-pages/building-page/building-page.component';
import { CustomQuestionComponent } from 'src/app/modules/dialogs/create-practice/custom-question/custom-question.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    LoginComponent,
    ChoosingClassroomComponent,
    ThemesComponent,
    DeleteCardComponent,
    StudentsComponent,
    AssistanceComponent,
    QualificationComponent,
    AddThemeComponent,
    AddStudentComponent,
    EditStudentComponent,
    EvaluationComponent,
    ForumsComponent,
    ResourcesComponent,
    AssessmentsComponent,
    ThemeContentComponent,
    ThemesBaseComponent,
    ConfigureThemeComponent,
    ForumsBaseComponent,
    ForumContentComponent,
    ThemeLessonsComponent,
    InitialInformationComponent,
    AddForumComponent,
    EditForumComponent,
    AddLessonComponent,
    ConfigureLessonComponent,
    ErrorDialogComponent,
    CreatePracticeComponent,
    ViewResponseComponent,
    AddCustomModuleComponent,
    EditCustomModuleComponent,
    EditDefaultModuleComponent,
    ModulesRubricComponent,
    CustomQuestionComponent,
    BuildingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTableModule,
    //FlexLayoutModule,
    MatToolbarModule,
    SharedModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ],
})
export class DefaultModule {}
