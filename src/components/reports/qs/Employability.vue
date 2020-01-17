<template>
  <div class="row row-view">
    <!--GRAPH-->
    <!--Title-->  
    <div id="graph" class="col-md-9 col-xs-11 p-l-2 p-t-2">
    <h1 id="report" class="title"/>  

    <!--Plotly-->
    <div ref="bar" class="vue-plotly "/>
      
    <!--Download buttons--> 
      <div class="col-md-12 text-center">
                
        <button class="button button-pdf" @click="download_pdf"><i class="fa fa-file-pdf fa-lg"></i>   Descargar PDF</button>
        <button class="button button-img" @click="download_img"><i class="fa fa-file-image fa-lg"></i>   Descargar JPG</button>
        <button class="button button-excel" @click="download_excel"><i class="fa fa-file-excel fa-lg"></i>   Descargar Excel</button>        
      </div>
    <!--Return button-->
       <div class="col-md-16 text-center">
        <router-link to="/reports"><button class="button button-back">Regresar</button></router-link>        
      </div>


 <!--Saves plot as image-->
    <img id="jpg-export" class="hidden"/>
    </div>
    <div>Fecha de actualización: {{this.fecha}}</div>
  </div>  
</template>


<style>
.students-color {
  color: #fff;
  background-color: #d8bd74;
  font-weight: bold;
}

.students-color:hover{
   background-color: #ccaa4c;
}

.border-students {
  border-left-color: #ccaa4c;
  min-height: 100%;
  border-width:2px !important;
}
</style>


<script>
import axios from "axios";
import JQuery from "jquery";
import jsPDF from "jsPDF";
import Plotly from "plotly.js";
import XLSX from "xlsx";
import { URL_INTEGRATION } from "@/common/constants"

var reportName = "Empleabilidad";
var img;
var info = []; //Saves data for verification
var saved = [];
var date = new Date();
var fecha;

export default {
  mounted() {
    this.loadDate();

  },

  data() {
     return {
      data: [],
      fecha: ''
    };
  },

  created() {
    this.load();
    this.loadDate();
  },

  methods: {
    load() {
      const path = URL_INTEGRATION+"/egresado-trabajos";
      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },

     loadDate() {
      const date =
        URL_INTEGRATION+"/fecha-egresados";

      axios

        .get(date)        
        .then(request => {
          console.log("fecha " + this.fecha);
          this.fecha = request.data.fecha;
        })
        .catch(() => {console.log("fallo fecha");});
    },

    successful(req) {
      document.getElementById("report").innerHTML = reportName;
      img = document.getElementById("jpg-export"); // Gets image

      var datos = []; // Saves data from JSON
    
      var empresas = [];
      var egresados = [];
      var numEgresados = [];
     
      var i;
      var size = req.data.length;
      var d = req.data;


      // Saves data for verification
      info = d["items"];
      info.unshift({
        cedula: "Cédula",
        nombre: "Nombre",
        apellido: "Apellido",
        correo: "Correo",
        telefono: "Teléfono",
        nombre_empresa: "Nombre de Empresa",
        
      });
      console.log("info ", info);

      saved = d["recuperado"];

      
      egresados = d["egresados"];

      for (i = 0; i < egresados.length; i++) {
        numEgresados.push(egresados[i]["cantidad_egresados"]);
        empresas.push(egresados[i]["nombre_empresa"]);
      }
  
      datos.push({
        x: empresas,
        y: numEgresados,
        name: "Empleabilidad",
        type: "bar",
        marker: {
          color: "#D6757F",
          width: 1
        },
        hoverlabel: { font: { size: 18 } },
        insidetextfont: {
          color: "#FFFFFF",
          size: 16
        }
      });

      console.log(datos);
      this.data = datos;

      // LAYOUT
 
      var auxDate = "Fecha de recuperación de datos: "+this.fecha;

      var layout = {
        title: {
          text: auxDate,
          font: {
            family: 'Courier New, monospace',
            size: 12
         },
        },
        xaxis: {
          fixedrange: true
        },
        yaxis: {
          fixedrange: true
        },
        barmode: "stack",
        editable: false,
        autosize: true,
        responsive: true,
        margin: {
          l: 250,
          r: 100,
          b: 100,
          t: 100,
          pad: -1
        }
        //width: 720,
        //height: 480,
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

        Plotly.toImage(gd, { height: 728, width: 1024 }).then(function(url) {
          img_jpg.attr("src", url);
          return Plotly.toImage(gd, {
            format: "jpeg",
            height: 728,
            width: 1024
          });
        });
      }); //plotly_plot
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
      doc.addImage(img, "JPG", 16, 16);

      doc.setFont("helvetica");
      doc.setFontType("normal");
      doc.setFontSize(16);
      doc.text("Fecha actualización: "+this.fecha, 170, 15);

      doc.save(reportName + ".pdf");

      doc.setProperties({
        title: reportName,
        subject: "Reporte",
        author: "UC Ranking",
        date: date
      });

       //Info for verification
      doc.addPage();
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.setFontSize(16);
      doc.text("Datos de Referencia", 15, 15);
      
      // Table
      doc.setFontSize(7);
      doc.cellInitialize();

      var flag = true;

      $.each(info, function(i, row) {
        $.each(row, function(j, cell) {

           if (flag) {
            doc.setFontType("bold");
            if (cell == "Nombre de Empresa") flag = false;
          } else {
            doc.setFontType("normal");
          }


          
          if ((j == "correo") | (j == "nombre_empresa")) {
            doc.cell(10, 25, 70, 15, cell, i);

          } else if (j == "cedula") {
            doc.cell(10, 25, 25, 15, cell, i);
          } else {
            doc.cell(10, 25, 30, 15, cell, i);
          }
        });
      });

          //Saved from
      doc.addPage();
      doc.setFont("helvetica");
      doc.setFontType("bolditalic");
      doc.setFontSize(16);
      doc.text("Recuperado de:", 15, 15);      
     
     
    doc.setFontSize(14);
    doc.setFontType("bold");      
       
    doc.text(saved, 15, 30);
    

      doc.save(reportName + ".pdf");
    }, //end_of_download()

    download_img() {
      var a = document.createElement("a");
      a.href = img.src;
      a.download = reportName + ".jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
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
        { wch: 10 },
        { wch: 20 },
        { wch: 20 },
        { wch: 40 },
        { wch: 25 },
        { wch: 40 }
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