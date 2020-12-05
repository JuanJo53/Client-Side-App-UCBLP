import {
  Component,
  OnInit,
  Inject,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { Module } from "src/app/models/Teacher/Evaluation/Module";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ThemesService } from "src/app/_services/teacher_services/themes.service";
import { AddThemeComponent } from "../../themes/add-theme/add-theme.component";
import { EvaluationService } from "src/app/_services/teacher_services/evaluation.service";
import { CardColor } from "src/app/models/CardColor";
import { CardImage } from "src/app/models/CardImage";
import { Combo } from "src/app/models/combo";

@Component({
  selector: "app-add-custom-module",
  templateUrl: "./add-custom-module.component.html",
  styleUrls: ["./add-custom-module.component.scss"],
})
export class AddCustomModuleComponent implements OnInit {
  @Input() heading: string;
  @Input() color: string;
  @Output() event = new EventEmitter();
  show = false;
  nombreTema = "";
  nombreModulo = "";
  valueColor: number = 0;
  valueImage: number = 0;
  colores: Combo[] = [];
  imagenes: Combo[] = [];
  imageUrl: string = "/assets/default.png";
  fileToUpload: File = null;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dataDialog: any,
    private servEva: EvaluationService,
    private dialogRef: MatDialogRef<AddCustomModuleComponent>
  ) {
    for (let i in this.dataDialog["colores"]) {
      this.colores.push({
        display: this.dataDialog["colores"][i].color,
        value: this.dataDialog["colores"][i].idColor,
      });
    }
    for (let i in this.dataDialog["imagenes"]) {
      this.imagenes.push({
        display: this.dataDialog["imagenes"][i].url,
        value: this.dataDialog["imagenes"][i].idImagen,
      });
    }
  }

  ngOnInit(): void {
    console.log(this.imagenes);
  }
  addModulesPers() {
    console.log("color escogido:" + this.heading);
    console.log("color escogido:" + this.color);
    let newModule = new Module();
    newModule.idColor = this.valueColor;
    newModule.idImagen = this.valueImage;
    newModule.nombreModulo = this.nombreModulo;
    newModule.rubrica = 0;
    newModule.idCurso = Number(this.dataDialog["idCurso"]);
    this.servEva.addModule(newModule).subscribe({
      next: (data) => {
        if (data.status == 200) {
          this.servEva.getModules(this.dataDialog["idCurso"]).subscribe({
            next: (data2) => {
              if (data2.status == 200) {
                this.dialogRef.close(data2.body);
              } else {
                this.dialogRef.close();
              }
            },
            error: (error) => {
              this.dialogRef.close();
            },
          });
        } else {
          this.dialogRef.close();
        }
      },
      error: (error) => {
        console.log(error);
        this.dialogRef.close();
      },
    });
  }
  toggleColors() {
    this.show = !this.show;
  }
  changeColor(color: Combo) {
    this.color = color.display;
    this.valueColor = Number(color.value);
    this.event.emit(this.color); // Return color
    this.show = false;
  }
  cancelar() {
    this.dialogRef.close();
  }

  public defaultColors: string[] = [
    "#9C5FAF",
    "#D77A61",
    "#498161",
    "#403837",
    "#27649B",
    "#EF8EC8",
    "#C7CC77",
  ];
}
