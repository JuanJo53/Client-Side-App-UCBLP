var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"LoginComponent","resolve":{"login":"AuthDocenteResolver"}},{"path":"building","component":"BuildingPageComponent"},{"path":"classroom","component":"ChoosingClassroomComponent","resolve":{"profile":"ProfileDocenteResolver","classroom":"ClassroomDocenteResolver","semester":"GetSemesterResolver","level":"GetLevelResolver"}},{"path":"teacher/:idCurso","component":"DefaultComponent","resolve":{"profile":"ProfileDocenteResolver","classroom":"ClassroomDocenteResolver","modules":"GetModulesSimpleResolver"},"children":[{"path":"dashboard","component":"DashboardComponent","resolve":{"practices":"GetPracticesDashBoardResolver"}},{"path":"my-class","children":[{"path":"students","resolve":{"students":"StudentsGeneralResolver"},"component":"StudentsComponent"},{"path":"profile/:idAlumnoCurso","resolve":{"students":"GetProfileStudentResolver","colors":"GetColorsResolver","images":"GetImagesIdResolver"},"component":"StudentsProfileComponent"},{"path":"qualification","children":[{"path":"","component":"QualificationComponent","resolve":{"qualifications":"GetQualificationResolver"}},{"path":"profile-students","children":[{"path":"","component":"StudentsProfileComponent"},{"path":"attendance-score","component":"AttendanceScoreComponent"},{"path":"others-score","component":"OthersScoreComponent"}]}]}]},{"path":"forums","component":"ForumsBaseComponent","children":[{"path":"","resolve":{"forums":"GetForumsResolver"},"component":"ForumsComponent"},{"path":":id","component":"ForumContentComponent"}]},{"path":"modules","component":"CustomModuleBaseComponent","children":[{"path":"custom/:idModulo","children":[{"path":"","component":"CustomModuleComponent","resolve":{"content":"GetContentModuleResolver"},"runGuardsAndResolvers":"always"},{"path":"detail","children":[{"path":":idContenidoModulo","component":"DetailCustomModuleComponent","resolve":{"notasContenido":"GetScoreContentModuleResolver"}}]}]},{"path":"themes","component":"ThemesBaseComponent","resolve":{"themes":"GetThemesTeacherResolver","images":"GetImagesIdResolver"},"children":[{"path":"","component":"ThemesComponent"},{"path":":idTema","children":[{"path":"","resolve":{"lessons":"GetLessonsResolver","images":"GetImagesIdResolver","types":"GetTypeLessonsResolver"},"component":"ThemeContentComponent"},{"path":":idLeccion","children":[{"path":"","resolve":{"practicas":"GetPracticesResolver"},"runGuardsAndResolvers":"always","children":[{"path":"","component":"ThemeLessonsComponent"},{"path":"detail","children":[{"path":":idPractica","resolve":{"scores":"GetScoresPracticesResolver"},"component":"DetailTableComponent"},{"path":"individual","component":"DetailIndividualComponent"}]}]},{"path":"practice","component":"CreatePracticeComponent","resolve":{"repository":"GetQuestionsRepositoryResolver"}}]}]}]},{"path":"assessments","component":"AssessmentsBaseComponent","children":[{"path":"","component":"AssessmentsComponent"},{"path":"detail","children":[{"path":"","component":"DetailAssessmentsComponent"},{"path":"individual-test","component":"IndividualAssessmentComponent"}]}]}]},{"path":"resources","component":"ResourcesComponent","runGuardsAndResolvers":"always","resolve":{"sections":"GetResourcesResolver"}},{"path":"evaluation","component":"EvaluationComponent","resolve":{"modules":"GetModulesResolver","colors":"GetColorsResolver","images":"GetImagesIdResolver"}}]},{"path":"**","redirectTo":"building"}],"kind":"module"}]}
