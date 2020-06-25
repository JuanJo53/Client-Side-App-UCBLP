import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {
  Url: string = "";
  constructor() { }
  fileToUpload: File = null;
  ngOnInit(): void {
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.Url = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
}
