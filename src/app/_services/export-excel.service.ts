import { Injectable } from '@angular/core';
import * as XLSX from "xlsx";
import * as EXCEL from "exceljs" 
import * as fs from "file-saver";

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor() { }
  encColumna(posi: number) {
    var primaLetra = 0;
    var segunLetra = 0;
    if (posi > 26) {
      primaLetra = posi / 26 - ((posi / 26) % 1) - 1;
      console.log(primaLetra);
      segunLetra = (posi % 26) - 1;
      return (
        String.fromCharCode(primaLetra + 65) +
        String.fromCharCode(segunLetra + 65)
      );
    } else {
      return String.fromCharCode(posi - 1 + 65);
    }
  }
  async export(element,nombre,tamCol){
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    var eli = this.encColumna(tamCol);
    delete ws[String(eli) + "1"]; 
    console.log(ws)
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    await XLSX.writeFile(wb, nombre+".xlsx");
  }
}
