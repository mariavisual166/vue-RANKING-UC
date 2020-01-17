<template>
  <div class="row row-view">
    <!--GRAPH-->
    <!--Title-->
    <div id="graph" class="col-md-9 col-xs-11 p-l-2 p-t-2">
      <h1 id="report" class="title"/>

      <!--Plotly-->
      <div ref="bar" class="vue-plotly"/>

      <!--Download buttons-->
      <div class="col-md-12 text-center">
                
        <!--button class="button button-pdf" @click="download_pdf">
          <i class="fa fa-file-pdf fa-lg"></i> Descargar PDF
        </button>
        
        <button class="button button-excel" @click="download_excel">
          <i class="fa fa-file-excel fa-lg"></i> Descargar Excel
        </button-->

      </div>


      <!--Return button-->
      <div class="col-md-16 text-center">
        <router-link to="/reports">
          <button class="button button-back">Regresar</button>
        </router-link>
      </div>

      <!--Saves plot as image-->
      <img id="jpg-export" class="hidden">
       <div>Fecha de actualización: {{this.fecha}}</div>
    </div>
   

  </div>
</template>


<style>
.teachers-color {
  color: #fff;
  background-color: #337f6e;
  font-weight: bold;
}

.teachers-color:hover {
  background-color: #006d55;
}

.border-teachers {
  border-left-color: #006d55;
  min-height: 100%;
  border-width: 2px !important;
}
</style>


<script>

import axios from "axios";
import JQuery from "jquery";
import jsPDF from "jsPDF";
import Plotly from "plotly.js";
import XLSX from "xlsx";
import { URL_INTEGRATION } from "@/common/constants"


var reportName = "Publicaciones por Docente";
var img;
var info = []; //Saves data for verification
var hope = {};
var json;
//var saved = [];
var date = new Date();
var fecha;

export default {
  mounted() {
    document.getElementById("report").innerHTML = reportName;
    img = document.getElementById("jpg-export"); // Gets image
    this.loadDate();
    },

  data() {
    return {
      data: [],
      fecha:''
    };
  },

  created() {
    this.load();
    this.loadDate();
  },

  methods: {

    
     load() {
      const path = URL_INTEGRATION+"/profesor-publicacion";
      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },

     loadDate() {
      const date =
        URL_INTEGRATION+"/fecha-docentes";

      axios

     .get(date)        
        .then(request => {
          console.log("fecha " + this.fecha);
          this.fecha = request.data.fecha;
        })
        .catch(() => {console.log("fallo fecha");});
    },



    successful(req) {    

      var datos = []; // Saves data from JSON
      var cedulas = [];
      var nombres = [];
      var apellidos = [];      
      var areasInv = [];
      var nombres = [];
      var publicaciones = [];
      var nombrePublicacion = [];

        
      var m;
      var n;

      var i;
      var j;
      var k;
      var size = req.data.length;
      var d = req.data;

      var aux;
      var auxPub = [];
      var publication = [];
      var flag = true;
  
     

    for (i = 0; i < size; i++) {

     
        cedulas.push(d[i]["cedula"]);
        nombres.push(d[i]["primer_nombre"]);
        apellidos.push(d[i]["primer_apellido"]);
        areasInv.push(d[i]["area_de_investigacion"]);
        publicaciones.push(d[i]["publicaciones"]);
      
/*
        if(publicaciones[i].length>1){

          for(m = 0; m < publicaciones[i].length; m++ ){

            hope.push(cedulas[i]);
            hope.push(nombres[i]);
            hope.push(apellidos[i]);
            hope.push(areasInv[i]);
            hope.push(publicaciones[i][m]["titulo_publicacion"]);
          }

        }
*/

      info.unshift({
        cedula: cedulas[i],
        primer_nombre: nombres[i],
        primer_apellido:apellidos[i],        
        area_de_investigacion: areasInv[i],       
        
      });
 
    
      auxPub = publicaciones[i]; //publicaciones del docente en la posición i

      info.unshift({
        num_publicaciones: auxPub.length        
      });
        
       // info.push(auxPub.length);//agrega cantidad de publicaciones
  
   
       
        for (j = 0; j < auxPub.length; j++) {       
          nombrePublicacion.push(auxPub[j]["titulo_publicacion"]);
                       
        }
 
        
        for (k = 0; k < nombrePublicacion.length; k++) {           
          if(flag){
            aux = nombrePublicacion[k];
            flag = false;
          }else{
            aux = aux + ", "+ nombrePublicacion[k]; 
          } 
        } 
               
       nombrePublicacion.length = 0;

        console.log("publication ", publication); 

        flag = true;          
        publication.push(aux);    

        info.unshift({
          segundo: aux        
        });

        //info.push(aux); 
        aux = "";    
      }    

  /*   console.log("EJEMPLO HOPE: ", hope);

      
      json = JSON.stringify(hope);
      console.log("This is a json ", json);

      console.log("info ", info);

        
     

      console.log("EJEMPLO HOPE22: ", hope);
 */
       
      info.unshift({
        cedula: "Cédula",
        primer_nombre: "Nombre",
        primer_apellido: "Apellido",      
        area_de_investigacion: "Área de Investigación",
        num_publicaciones: "Número de Publicaciones",
        publicaciones: "Publicaciones"
        
      });
    /*   console.log("info 2", info); */

      var values = [
        cedulas,
        nombres,
        apellidos,
        areasInv,
        publication
      ]; 


      datos.push({

        type: 'table',
        columnwidth: [600, 600, 600, 600, 600],
        header: {
          values: [["Cédula"], ["Nombre"], ["Apellido"], ["Área de Investigación"], ["Publicaciones"]],
          align: ["center"],
          line: {width: 1, color: '#506784'},
          fill: {color: '#119DFF'},
          font: {size: 18, color: "white"}
        },
        cells: {
          values: values,
          align: ["center"],
          height: 40,
          line: {color: "#506784", width: 1},
          fill: {color: [/*'#25FEFD',*/ 'white']},
          font: {size: 16, color: ["#506784"]}
        }
      });


      console.log(datos);
      this.data = datos;

       var auxDate = "Fecha de recuperación de datos: "+this.fecha;

      var layout = {
        title: {
          text: auxDate,
          font: {
            family: 'Courier New, monospace',
            size: 12
         },
        },           
      
        responsive: true,
        margin: {
          l: 200,
          r: 200,
          b: 150,
          t: 100,
          pad: -1
        },
        width: 1080,
        height: 720,
      };

      var config = {
        displaylogo: false,
        displayModeBar: false,
        doubleClick: "reset+autosize",
        responsive: true
      };


      // GRAPH

      //Exports plot as image
      var d3 = Plotly.d3;
      var img_jpg = d3.select("#jpg-export");
      // Displays graph
      Plotly.react(this.$refs.bar, this.data, layout, config).then(function(gd) {
        //Saves plot as image
        gd.on("plotly_legendclick", () => false);

        Plotly.toImage(gd, {height: 768, width: 1024}).then(function(url) {
          img_jpg.attr("src", url);
          return Plotly.toImage(gd, {
            format: "jpeg",       
            height: 768,
            width: 1024,
          })
        });
      });//plotly_plot

    }, //successful(req)

    failed() {
      this.error = "User failed!";
    },

    

    download_pdf() {
      var doc = new jsPDF("l", "mm", "a4");
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.setFontSize(20);
      doc.text(reportName, 15, 15);     

      doc.setFont("helvetica");
      doc.setFontType("normal");
      doc.setFontSize(16);
      doc.text("Fecha actualización: "+this.fecha, 170, 15);
      
      
      doc.setProperties({
        title: reportName,
        subject: "Reporte",
        author: "UC Ranking",
        date: date
      });

        //Info for verification
    
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.setFontSize(16);
      doc.text("Datos de Referencia", 25, 25);
      
      // Table
      doc.setFontSize(7);
      doc.cellInitialize();


      $.each(info, function(i, row) {
       
          $.each(row, function(j, cell) {

            if (cell != "Publicaciones"){

              if(j!="publicaciones"){

                if ( j =="publicaciones") {
                  doc.cell(10, 25, 70, 15, cell, i);
                } else              
                if ( j =="correo") {
                  doc.cell(10, 25, 60, 15, cell, i);
                } else if (j == "area_de_investigacion") {
                  doc.cell(10, 25, 40, 15, cell, i);
                } else if (j == "cedula") {
                  doc.cell(10, 25, 25, 15, cell, i);
                } else{
                  doc.cell(10, 25, 35, 15, cell, i);
                }

              }

            }
           
          });
      
      });
/*
      doc.addPage();
      doc.setFont("helvetica");
      doc.setFontSize(8);
      doc.setFontType("bold");
      doc.text("* Para ver más información sobre las publicaciones que fueron citadas por favor descargar archivo en formato Excel (.xlsx)", 15, 15);

      //Saved from
      doc.addPage();
      doc.setFont("helvetica");
      doc.setFontType("bolditalic");
      doc.setFontSize(16);
      doc.text("Recuperado de:", 15, 15);
      var j = 0;
      var aux = 15;

      for(j = 0; j < 4; j++){

        doc.setFontSize(14);
        doc.setFontType("bold");      
        aux = aux + 15;
        doc.text(saved[j]["first_name"], 15, aux);

        doc.setFontSize(10);         
        aux = aux + 5;
        doc.text(saved[j]["email"], 15, aux);
        aux = aux + 5;
        doc.text(saved[j]["phone"], 15, aux);
        aux = aux + 5;
        doc.text(saved[j]["address"], 15, aux);  
        aux = aux + 5;      
      }

        aux = 15;

       for(j = 4; j < 7; j++){

        doc.setFontSize(14);
        doc.setFontType("bold");      
        aux = aux + 15;
        doc.text(saved[j]["first_name"], 150, aux);

        doc.setFontSize(10);         
        aux = aux + 5;
        doc.text(saved[j]["email"], 150, aux);
        aux = aux + 5;
        doc.text(saved[j]["phone"], 150, aux);
        aux = aux + 5;
        doc.text(saved[j]["address"], 150, aux); 
        aux = aux + 5;       
      }
*/
      doc.save(reportName + ".pdf");
    }, //end_of_download()

  
    download_excel() {
      // Data from JSON
      var ws = XLSX.utils.json_to_sheet(info, { skipHeader: true });

      // A workbook is the name given to an Excel file
      var wb = XLSX.utils.book_new(); // make Workbook of Excel

      // Workbook Properties
      wb.Props = {
        Title: reportName,
        Subject: "Reporte",
        Author: "UC Ranking",
        CreatedDate: date
      };

      // Column Properties
      var wscols = [
        { wch: 12 },
        { wch: 20 },
        { wch: 20 },
        { wch: 40 },
        { wch: 30 },
        { wch: 8 },
        { wch: 100 }
      ];
      ws["!cols"] = wscols;

      var wsrows = [{ hpt: 20 }];
      ws["!rows"] = wsrows;

      // add Worksheet to Workbook
      XLSX.utils.book_append_sheet(wb, ws, "Reporte");

      // export Excel file
      XLSX.writeFile(wb, reportName + ".xlsx");
    } //end_of_download

  }
};
</script>