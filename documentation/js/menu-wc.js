'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ucb-english-client documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2ad1b316eb404580e3b407fcc96c1dd1"' : 'data-target="#xs-components-links-module-AppModule-2ad1b316eb404580e3b407fcc96c1dd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2ad1b316eb404580e3b407fcc96c1dd1"' :
                                            'id="xs-components-links-module-AppModule-2ad1b316eb404580e3b407fcc96c1dd1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ColorPickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorPickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DefaultModule.html" data-type="entity-link">DefaultModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DefaultModule-dbe01b65be024cfad282d775cc2d0216"' : 'data-target="#xs-components-links-module-DefaultModule-dbe01b65be024cfad282d775cc2d0216"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DefaultModule-dbe01b65be024cfad282d775cc2d0216"' :
                                            'id="xs-components-links-module-DefaultModule-dbe01b65be024cfad282d775cc2d0216"' }>
                                            <li class="link">
                                                <a href="components/AddCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddCustomModuleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddCustomModuleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddDocumentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddDocumentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddForumComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddForumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddLessonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddLessonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddSectionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddStudentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddThemeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddThemeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssessmentsBaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssessmentsBaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssessmentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssessmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssistanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssistanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceScoreComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AttendanceScoreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuildingPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BuildingPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChoosingClassroomComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChoosingClassroomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigureLessonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigureLessonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigureLessonContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigureLessonContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigureThemeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigureThemeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateCourseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateCourseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatePracticeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreatePracticeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomModuleBaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomModuleBaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomModuleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomModuleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomModuleRubricComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomModuleRubricComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomQuestionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomQuestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailAssessmentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailAssessmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailCustomModuleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailCustomModuleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailIndividualComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailIndividualComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditCustomModuleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditCustomModuleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditDefaultModuleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditDefaultModuleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditDocumentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditDocumentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditForumComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditForumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditPracticeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditPracticeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditSectionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditStudentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EvaluationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EvaluationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForumContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForumContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForumsBaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForumsBaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForumsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForumsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GoodDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GoodDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndividualAssessmentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IndividualAssessmentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InitialInformationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InitialInformationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModulesRubricComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModulesRubricComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OthersScoreComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OthersScoreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QualificationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QualificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RepositoryQuestionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepositoryQuestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResourcesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourcesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScheduleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentsProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentsProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThemeContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThemeContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThemeLessonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThemeLessonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThemesBaseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThemesBaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThemesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThemesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateStudentScoreComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpdateStudentScoreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewResponseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewResponseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WarningDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WarningDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-0410f7c30c69446902b1935c89bfedc9"' : 'data-target="#xs-components-links-module-SharedModule-0410f7c30c69446902b1935c89bfedc9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-0410f7c30c69446902b1935c89bfedc9"' :
                                            'id="xs-components-links-module-SharedModule-0410f7c30c69446902b1935c89bfedc9"' }>
                                            <li class="link">
                                                <a href="components/CardClassroomComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardClassroomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Asistencia.html" data-type="entity-link">Asistencia</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttendanceScoreContent.html" data-type="entity-link">AttendanceScoreContent</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttendanceScoreSection.html" data-type="entity-link">AttendanceScoreSection</a>
                            </li>
                            <li class="link">
                                <a href="classes/CardClassroom.html" data-type="entity-link">CardClassroom</a>
                            </li>
                            <li class="link">
                                <a href="classes/CardColor.html" data-type="entity-link">CardColor</a>
                            </li>
                            <li class="link">
                                <a href="classes/CardImage.html" data-type="entity-link">CardImage</a>
                            </li>
                            <li class="link">
                                <a href="classes/CardThemes.html" data-type="entity-link">CardThemes</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckboxQuestion.html" data-type="entity-link">CheckboxQuestion</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column.html" data-type="entity-link">Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/Combo.html" data-type="entity-link">Combo</a>
                            </li>
                            <li class="link">
                                <a href="classes/Combo-1.html" data-type="entity-link">Combo</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContentModule.html" data-type="entity-link">ContentModule</a>
                            </li>
                            <li class="link">
                                <a href="classes/DragandDropColumns.html" data-type="entity-link">DragandDropColumns</a>
                            </li>
                            <li class="link">
                                <a href="classes/EvaluationCard.html" data-type="entity-link">EvaluationCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/Forum.html" data-type="entity-link">Forum</a>
                            </li>
                            <li class="link">
                                <a href="classes/HorarioClase.html" data-type="entity-link">HorarioClase</a>
                            </li>
                            <li class="link">
                                <a href="classes/Lesson.html" data-type="entity-link">Lesson</a>
                            </li>
                            <li class="link">
                                <a href="classes/Level.html" data-type="entity-link">Level</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListaEstudiante.html" data-type="entity-link">ListaEstudiante</a>
                            </li>
                            <li class="link">
                                <a href="classes/matching.html" data-type="entity-link">matching</a>
                            </li>
                            <li class="link">
                                <a href="classes/Module.html" data-type="entity-link">Module</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotaPractica.html" data-type="entity-link">NotaPractica</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotasContenidoModulo.html" data-type="entity-link">NotasContenidoModulo</a>
                            </li>
                            <li class="link">
                                <a href="classes/OtherScoreContent.html" data-type="entity-link">OtherScoreContent</a>
                            </li>
                            <li class="link">
                                <a href="classes/OtherScoreSection.html" data-type="entity-link">OtherScoreSection</a>
                            </li>
                            <li class="link">
                                <a href="classes/Practica.html" data-type="entity-link">Practica</a>
                            </li>
                            <li class="link">
                                <a href="classes/PracticeDashboard.html" data-type="entity-link">PracticeDashboard</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pregunta.html" data-type="entity-link">Pregunta</a>
                            </li>
                            <li class="link">
                                <a href="classes/RadioButtonCompleteCard.html" data-type="entity-link">RadioButtonCompleteCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/RadioButtonQuestion.html" data-type="entity-link">RadioButtonQuestion</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResourceContent.html" data-type="entity-link">ResourceContent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResourceSection.html" data-type="entity-link">ResourceSection</a>
                            </li>
                            <li class="link">
                                <a href="classes/Schedule.html" data-type="entity-link">Schedule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ScheduleContent.html" data-type="entity-link">ScheduleContent</a>
                            </li>
                            <li class="link">
                                <a href="classes/Semester.html" data-type="entity-link">Semester</a>
                            </li>
                            <li class="link">
                                <a href="classes/SimpleCard.html" data-type="entity-link">SimpleCard</a>
                            </li>
                            <li class="link">
                                <a href="classes/Theme.html" data-type="entity-link">Theme</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeLesson.html" data-type="entity-link">TypeLesson</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthDocenteResolver.html" data-type="entity-link">AuthDocenteResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClassroomDocenteResolver.html" data-type="entity-link">ClassroomDocenteResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClassroomService.html" data-type="entity-link">ClassroomService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContenidoModuloService.html" data-type="entity-link">ContenidoModuloService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashBoardService.html" data-type="entity-link">DashBoardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteItemService.html" data-type="entity-link">DeleteItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EvaluationService.html" data-type="entity-link">EvaluationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExportExcelService.html" data-type="entity-link">ExportExcelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ForumsService.html" data-type="entity-link">ForumsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetColorsResolver.html" data-type="entity-link">GetColorsResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetContentModuleResolver.html" data-type="entity-link">GetContentModuleResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetFechasAsistenciaResolver.html" data-type="entity-link">GetFechasAsistenciaResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetForumsResolver.html" data-type="entity-link">GetForumsResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetImagesIdResolver.html" data-type="entity-link">GetImagesIdResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetLessonsResolver.html" data-type="entity-link">GetLessonsResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetLevelResolver.html" data-type="entity-link">GetLevelResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetModulesResolver.html" data-type="entity-link">GetModulesResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetModulesSimpleResolver.html" data-type="entity-link">GetModulesSimpleResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetPracticeModResolver.html" data-type="entity-link">GetPracticeModResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetPracticesDashBoardResolver.html" data-type="entity-link">GetPracticesDashBoardResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetPracticesResolver.html" data-type="entity-link">GetPracticesResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetProfileStudentResolver.html" data-type="entity-link">GetProfileStudentResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetQualificationResolver.html" data-type="entity-link">GetQualificationResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetQuestionsRepositoryResolver.html" data-type="entity-link">GetQuestionsRepositoryResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetResourcesResolver.html" data-type="entity-link">GetResourcesResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetScoreContentModuleResolver.html" data-type="entity-link">GetScoreContentModuleResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetScoresPracticesResolver.html" data-type="entity-link">GetScoresPracticesResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetSemesterResolver.html" data-type="entity-link">GetSemesterResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetThemesTeacherResolver.html" data-type="entity-link">GetThemesTeacherResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetTypeLessonsResolver.html" data-type="entity-link">GetTypeLessonsResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LessonService.html" data-type="entity-link">LessonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link">LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MyClassService.html" data-type="entity-link">MyClassService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PracticesService.html" data-type="entity-link">PracticesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PracticesService-1.html" data-type="entity-link">PracticesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileDocenteResolver.html" data-type="entity-link">ProfileDocenteResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QualificationService.html" data-type="entity-link">QualificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResourcesService.html" data-type="entity-link">ResourcesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SectionsService.html" data-type="entity-link">SectionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SharedService.html" data-type="entity-link">SharedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SideBarControlService.html" data-type="entity-link">SideBarControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SimpleErrorService.html" data-type="entity-link">SimpleErrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentsGeneralResolver.html" data-type="entity-link">StudentsGeneralResolver</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemesService.html" data-type="entity-link">ThemesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenStorageService.html" data-type="entity-link">TokenStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadFilesService.html" data-type="entity-link">UploadFilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddStudent.html" data-type="entity-link">AddStudent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChipOption.html" data-type="entity-link">ChipOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChipOption-1.html" data-type="entity-link">ChipOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChipOptionNumber.html" data-type="entity-link">ChipOptionNumber</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/comboInputOption.html" data-type="entity-link">comboInputOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Lista.html" data-type="entity-link">Lista</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaAsistencia.html" data-type="entity-link">ListaAsistencia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaDeAsistenciaNota.html" data-type="entity-link">ListaDeAsistenciaNota</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaDeEstudiantes.html" data-type="entity-link">ListaDeEstudiantes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaDeForos.html" data-type="entity-link">ListaDeForos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaDeNotas.html" data-type="entity-link">ListaDeNotas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaDeNotas-1.html" data-type="entity-link">ListaDeNotas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaDeRespuestasForos.html" data-type="entity-link">ListaDeRespuestasForos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListaPreguntasPracticas.html" data-type="entity-link">ListaPreguntasPracticas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Teacher.html" data-type="entity-link">Teacher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TeacherLogin.html" data-type="entity-link">TeacherLogin</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});