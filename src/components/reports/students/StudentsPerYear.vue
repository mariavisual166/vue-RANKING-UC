<template>
<div>  
      <div class="row">
        
        <!-- <div class="col-xl-8 col-md-8 col-sm-12"> -->

          <form class="col-md-10"  @submit.prevent="getStudent">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>

            <div class="form-group form-row">
                <label for="inputFrom" class="col-sm-1 col-form-label text-form">Desde</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="desde">
                        <option value="">Seleccionar año desde</option>
                        <option v-for="year in arrayDateFrom" :key="year.id" v-bind:value="year.id">{{ year.codigo }}</option>
                    </select>
                </div>

                <label for="inputTo" class="col-sm-1 col-form-label text-form">Hasta</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="hasta">
                        <option value="">Seleccionar año hasta</option>
                        <option v-for="year in arrayDateTo" :key="year.id" v-bind:value="year.id">{{ year.codigo }}</option>
                    </select>
                </div>
                <div class="col-sm-2">
                    <button type="submit" class="btn button-back">Buscar</button>
                </div>
            </div>
        </form>
        <!-- </div> -->
    </div> 


    <div class="row">
    
    <!--GRAPH-->
    <div class="col-md-9 col-xl-9"> 
        
        <!--Title-->
        <h1 id="report" class="col-md-12  title-customized"/>    
  
        <div id="graph">         

          <!--Plotly-->
          <div ref="scatter" class="vue-plotly"/> 

          <!--Download buttons--> 
          <div id="download-buttons" class="col-md-12 text-center" style="display: none">
                            
              <button class="button button-pdf" @click="download_pdf"><i class="fa fa-file-pdf fa-lg"></i>   Descargar PDF</button>
              <button class="button button-img" @click="download_img"><i class="fa fa-file-image fa-lg"></i>   Descargar JPG</button>
          </div>

          <!--Return button-->
          <div class="col-md-12 text-center">
            <router-link to="/reports"><button class="button button-back button-margin">Regresar</button></router-link>        
          </div>  

          <!--Saves plot as image-->
          <img id="jpg-export" class="hidden"/>
      </div><!--div id=graph-->  
       <div>Fecha de actualización: {{this.fecha}}</div>
      
    </div>
    <!--END OF GRAPH-->

    </div>

      

</div>
</template>

<style>

.custom-margin{
    margin-top: -100px;
}  

.title-customized{
    margin-top: 5rem;
    margin-left: 20rem;  
    margin-bottom: -40rem;  
}

.vue-plotly {    
    margin-left: 0rem;
    margin-top: 40rem;
}


.form-row{
    margin-top: 10rem;
    margin-left: 8rem;  
}

.form-control:hover {
  border-color: gray;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px lightgray;
}

.form-control:active {
  border-color: gray;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px lightgray;
}

.form-control:focus {
  outline: 0;
}

.text-form {
  font-size: 16px;
  font-weight: bold;
  color: #595959;
  margin-right: 2rem;
  margin-left: 2px;
}

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
import axios from 'axios';
import JQuery from "jquery";
import jsPDF from "jsPDF";
import Plotly from "plotly.js";
import XLSX from "xlsx";

import { URL_INTEGRATION } from '@/common/constants'

var reportName = "Estudiantes Matriculados";
var img;
var info = []; //Saves data for verification
var date = new Date();
var fecha;


export default {
  name: 'StudentsPerYear',
  data () {
      return {
          desde: '',
          hasta: '',
          arrayDateFrom: [],
          arrayDateTo: [], 
          error: '',
          fecha: ''
      }
  },
  methods: {
    getStudent: function () {
        const path = URL_INTEGRATION+'/estudiantes-ano';
        console.log(this.desde);
        console.log(this.hasta);
        this.error = '';
        if (this.desde < this.hasta || this.desde == "" || this.hasta == "") {
            axios.post(path, { 
                desde: this.desde, 
                hasta: this.hasta
            })
                .then(request => this.successful(request))
                .catch(() => this.failed())
        } else {
            console.log("Error no se puede hacer la consulta");
            this.error = "Error no se puede hacer la consulta";
        }
    
    },
     loadDate() {
      const date =
        URL_INTEGRATION+"/fecha-estudiantes";

      axios

        .get(date)        
        .then(request => {
          console.log("fecha " + this.fecha);
          this.fecha = request.data.fecha;
        })
        .catch(() => {console.log("fallo fecha");});
    },

    successful (req) {
        console.log(req.data);

      document.getElementById("report").innerHTML = reportName;
      img = document.getElementById("jpg-export"); // Gets image

      document.getElementById("download-buttons").style.display = "block";

      var datos = []; // Saves data from JSON
      var d = req.data;
      var size;
      var allYears = [];
      var years = [];
      var total = [];
      var i;

 

      allYears = d["anos"];
      size = allYears.length;
      console.log(allYears);
      console.log("size ", size);

      for (i = 0; i < size; i++) {
        years.push(allYears[i]["ano"]);
        total.push(allYears[i]["total"]);
      }

      console.log(years);
      console.log(total);

      datos.push({
        x: years,
        y: total,
       // type: 'scatter',
        mode: 'lines+markers',     
        
        marker: { color: "#03a678",
                  size: 12,
                  opacity: 0.5
                },
                        
        hoverlabel: { font:{size:18}},
      });

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
        //width: 720,
        //height: 480,
      };

      var config = {
        displaylogo: false,
        displayModeBar: false,
        doubleClick: "reset+autosize",
        //responsive: true
      };

      // GRAPH

      //Exports plot as image
      var d3 = Plotly.d3;
      var img_jpg = d3.select("#jpg-export");
      // Displays graph
      Plotly.react(this.$refs.scatter, this.data, layout, config).then(function(
        gd
      ) {
        //Saves plot as image
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


    },

     download_pdf() {      
      var doc = new jsPDF("l", "mm", "a4");
      doc.setFont("helvetica");
      doc.setFontType("bold");
      doc.setFontSize(20);
      doc.text(reportName, 15, 15);
      doc.addImage(img, "JPG", 20, 20);

      
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
    
    failed () {
        this.error = 'Fallo estudiantes por año!'
    },
    getYears() {
        const path = URL_INTEGRATION + '/year';
        axios.get(path)
        .then(request => this.yearSuccess(request))
        .catch(() => this.yearFailed())
    },
    yearSuccess (req) {
      this.arrayDateFrom = req.data;
      this.arrayDateTo = req.data;
    },
    yearFailed () {
      this.error = 'Fallo busqueda en Años!'
    },
  },
  created() {
      this.getYears();
      this.loadDate();
  },
}
</script>

