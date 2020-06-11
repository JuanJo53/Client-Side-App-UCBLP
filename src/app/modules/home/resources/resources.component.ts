import { Component, OnInit } from "@angular/core";
import { UploadFilesService } from "src/app/_services/teacher_services/upload-files.service";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"],
})
export class ResourcesComponent implements OnInit {
  file: any;
  constructor(private servUpload: UploadFilesService) {}
  fileChange(file) {
    this.file = file;
  }
  subirArchivo() {
    this.servUpload.getUrlvideo().subscribe({
      next: (data) => {
        console.log(data);
        this.servUpload
          .subirArchivo(data.body[0], this.file.target.files[0])
          .subscribe({
            next: (data2) => {
              console.log(data2);
            },
            error: (error) => {
              console.log(error);
            },
          });
      },
      error: (error) => {},
    });
  }
  ngOnInit(): void {}
}
