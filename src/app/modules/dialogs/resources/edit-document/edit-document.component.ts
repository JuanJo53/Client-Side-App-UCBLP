import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {

  Url: string = "";
  constructor() { }
  fileToUpload: File = null;
  disableTextbox =  true;
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
  
  toggleDisable() {
    this.disableTextbox = !this.disableTextbox;
  }

}
