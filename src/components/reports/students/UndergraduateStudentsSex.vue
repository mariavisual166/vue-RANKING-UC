<template>
  <div class="row row-view">
    <!--GRAPH-->
    <!--Title-->
    <div id="graph" class="col-md-9 col-xs-11 p-l-2 p-t-2">
      <h1 id="report" class="title"/>

      <!--Plotly-->
      <div ref="pie" class="vue-plotly"/>

      <!--Download buttons-->
      <div class="col-md-12 text-center">
        <button class="button button-pdf" @click="download_pdf">
          <i class="fa fa-file-pdf fa-lg"></i> Descargar PDF
        </button>
        <button class="button button-img" @click="download_img">
          <i class="fa fa-file-image fa-lg"></i> Descargar JPG
        </button>
        <button class="button button-excel" @click="download_excel">
          <i class="fa fa-file-excel fa-lg"></i> Descargar Excel
        </button>
      </div>
      <!--Return button-->
      <div class="col-md-16 text-center">
        <router-link to="/reports">
          <button class="button button-back">Regresar</button>
        </router-link>
      </div>

      <!--Saves plot as image-->
      <img id="jpg-export" class="hidden">
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

.students-color:hover {
  background-color: #ccaa4c;
}

.border-students {
  border-left-color: #ccaa4c;
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
import { URL_INTEGRATION } from "@/common/constants";

var reportName = "Estudiantes de Pregrado por Sexo";
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
    return { data: [], fecha: '' };
  },

  created() {
    this.load();
    this.loadDate();
  },

  methods: {
    load() {
      const path = URL_INTEGRATION + "/estudiantes-pregrado-sexo";

      axios
        .get(path)
        .then(request => this.successful(request))
        .catch(() => this.failed());
    },

    loadDate() {
      const date = URL_INTEGRATION + "/fecha-estudiantes";

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
      var masculino;
      var femenino;
      var totalEstudiantes;
      var d = req.data;

   

      // Saves data for verification
      info = d["items"];
      info.unshift({
        cedula: "Cédula",
        nombre: "Nombre",
        apellido: "Apellido",
        email: "Correo",
        tipo: "Tipo",
        sexo: "Sexo"
      });
      console.log("info ", info);

      saved = d["recuperado"];

      masculino = d["Masculino"];
      femenino = d["Femenino"];
      totalEstudiantes = d["total-estudiantes-pregrado"];

      console.log(masculino);
      console.log(femenino);

      datos.push({
        values: [masculino, femenino],
        labels: ["Masculino", "Femenino"],
        type: "pie",
        marker: { colors: ["#3B3B98", "#A3CB38"], line: { color: "#FFFFFF" } },
        insidetextfont: { color: "#FFFFFF", size: 16 },
        hoverlabel: { font: { size: 18 } }
      });

      console.log(datos);
      this.data = datos;

      // LAYOUT

      var auxDate = "Fecha de recuperación de datos: " + this.fecha;

      var layout = {
        title: {
          text: auxDate,
          font: {
            family: "Courier New, monospace",
            size: 12
          }
        },
        xaxis: {
          fixedrange: true
        },
        yaxis: {
          fixedrange: true
        },
        editable: false,
        autosize: true,
        responsive: true,
        legend: {
          y: 0.8,
          font: { size: 16 }
        },
        margin: {
          l: 100,
          r: 130,
          b: 100,
          t: 100,
          pad: -1
        }
      };

      var config = {
        displaylogo: false,
        displayModeBar: false,
        responsive: true
      };

      // GRAPH

      // Exports plot as image
      var d3 = Plotly.d3;
      var img_jpg = d3.select("#jpg-export");
      // Displays graph
      Plotly.react(this.$refs.pie, this.data, layout, config).then(function(
        gd
      ) {
        //  Saves plot as image
        gd.on("plotly_legendclick", () => false);

        Plotly.toImage(gd, { height: 768, width: 1024 }).then(function(url) {
          img_jpg.attr("src", url);
          return Plotly.toImage(gd, {
            format: "jpeg",
            height: 768,
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
      doc.addImage(img, "JPG", 17, 17);
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
      doc.addPage();
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.setFontSize(16);
      doc.text("Datos de Referencia", 15, 15);

      // Table
      doc.setFontSize(8);
      doc.cellInitialize();

      var flag = true;

      $.each(info, function(i, row) {
        $.each(row, function(j, cell) {
          if (flag) {
            doc.setFontType("bold");
            if (cell == "Sexo") flag = false;
          } else {
            doc.setFontType("normal");
          }

          if (j == "email") {
            doc.cell(15, 25, 70, 15, cell, i);
          } else if (j == "cedula") {
            doc.cell(15, 25, 30, 15, cell, i);
          } else {
            doc.cell(15, 25, 40, 15, cell, i);
          }
        });
      });

      //Saved from
      doc.addPage();
      doc.setFont("helvetica");
      doc.setFontType("bolditalic");
      doc.setFontSize(16);
      doc.text("Recuperado de:", 15, 15);
      var j = 0;
      var aux = 15;

      for (j = 0; j < 4; j++) {
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

      for (j = 4; j < 7; j++) {
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
        { wch: 12 },
        { wch: 20 },
        { wch: 20 },
        { wch: 40 },
        { wch: 20 },
        { wch: 20 }
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