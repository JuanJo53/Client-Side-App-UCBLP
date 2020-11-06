import { Injectable } from '@angular/core';
import { table } from 'console';
import * as Excel from "exceljs";
import * as htmlTable from 'html-table-to-json'
import {saveAs} from "file-saver";

import * as XLSX from "xlsx";
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
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element,{ raw:true });
    console.log(ws);
    const work=new Excel.Workbook();
    var ws2=work.addWorksheet("hoja 1");
    var inicio=ws["!ref"].split(":")[0];
    var fin=ws["!ref"].split(":")[1];
    var inicioNum;
    var finNum;
    var inicioLet="";
    var finLet="";
    for(let i=0;i<inicio.length;i++){
      if(inicio.charCodeAt(i)>47&&inicio.charCodeAt(i)<58){
        inicioNum=Number(inicio.substring(i,inicio.length));
        i=inicio.length;
      }
      else{
        inicioLet+=inicio.charAt(i);
      }
    }
    for(let i=0;i<fin.length;i++){
      if(fin.charCodeAt(i)>47&&fin.charCodeAt(i)<58){
        finNum=Number(fin.substring(i,fin.length));
        i=fin.length;
      }
      else{
        finLet+=fin.charAt(i);
      }
    }
    for(let i=1;i<=finNum;i++){
      var row=[];
      for(let j=inicioLet.charCodeAt(0);j<finLet.charCodeAt(0);j++){
        
        row.push(ws[String.fromCharCode(j)+i]["v"]);
      }
      ws2.addRow(row);
        for(let j=inicioLet.charCodeAt(0);j<finLet.charCodeAt(0);j++){
          if(i==1){
          ws2.getCell(String.fromCharCode(j)+i).fill = {
            type: 'pattern',
            pattern:'solid',
            fgColor:{argb:'084c61'}
          };
          ws2.getCell(String.fromCharCode(j)+i).font = {
            color:{argb:'ffffff'}
          };
          var aumento=ws[String.fromCharCode(j)+i]["v"]==="Name"?20:4;
            ws2.getColumn(String.fromCharCode(j)).width=ws[String.fromCharCode(j)+i]["v"].length+aumento;
            }
          ws2.getCell(String.fromCharCode(j)+i).alignment = { wrapText: true,vertical:'middle',horizontal:'center'};
          ws2.getCell(String.fromCharCode(j)+i).border = {
            bottom:{
              color:{argb:'000000'},
              style:"thin"
              
            },
            
            top:{
              color:{argb:'000000'},
              style:"thin"
            },
            
            left:{
              color:{argb:'000000'},
              style:"thin"
            },
            right:{
              color:{argb:'000000'},
              style:"thin"
            }
          };
        }
    }
    console.log(ws2);
    ws2.properties.defaultRowHeight=24;
    // var eli = this.encColumna(tamCol);
    // delete ws[String(eli) + "1"]; 
    // console.log(ws)
    // const wb: Workbook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    // await XLSX.writeFile(wb, nombre+".xlsx");
    const buffer = await work.xlsx.writeBuffer();
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const fileExtension = '.xlsx';

    const blob = new Blob([buffer], {type: fileType});

    saveAs(blob, nombre + fileExtension);
  }
}
