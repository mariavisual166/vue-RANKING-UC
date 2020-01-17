<template>
<div>
  <!--Title-->
  <h1 id="report" class="title"/> 

     <!--GRAPH-->
    <div>    
  
      <div id="graph" class="col-md-1 col-xs-6 p-l-2 p-t-2 row-scatter">         

        <!--Plotly-->
        <div ref="scatter" class="vue-plotly"/> 

        <!--Saves plot as image-->
        <img id="jpg-export" class="hidden"/>
      </div>
      
    </div>

   <!--FORM -->
    <div>
        <form class="col-md-12"  @submit.prevent="getStudent">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <div class="form-group row" style="margin-top: 30rem;">
                <label for="inputFrom" class="col-sm-1 col-form-label text-form">Facultad</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="facultad" required>
                        <option value="">Seleccionar facultad</option>
                        <option v-for="facultad in facultades" :key="facultad.id" v-bind:value="facultad.id">{{ facultad.nombre }} ({{facultad.codigo}})</option>
                    </select>
                </div>
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
      </div>

  
    
</div>
</template>

<style>
.row-scatter{

  margin-left: 6px;
}


.row-form {
  margin-top: 2rem;
  vertical-align: top;
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
</style>

<script>
import axios from "axios";
import JQuery from "jquery";
import jsPDF from "jsPDF";
import Plotly from "plotly.js";
import XLSX from "xlsx";
import { URL_INTEGRATION } from '@/common/constants'

var reportName = "Reporte Prueba";
var img;
var info = []; //Saves data for verification
var date = new Date();

export default {
  name: "StudentsYearFaculty",
  data() {
    return {
      desde: "",
      hasta: "",
      arrayDateFrom: [],
      arrayDateTo: [],
      error: "",
      facultad: "",
      facultades: []
    };
  },
  methods: {
    getStudent: function() {
      const path = URL_INTEGRATION + "/estudiantes-ano-facultad";
      console.log(this.desde);
      console.log(this.hasta);
      console.log(this.facultad);
      this.error = "";
      if (this.desde < this.hasta || this.desde == "" || this.hasta == "") {
        axios
          .post(path, {
            desde: this.desde,
            hasta: this.hasta,
            facultad: this.facultad
          })
          .then(request => this.successful(request))
          .catch(() => this.failed());
      } else {
        console.log("Error no se puede hacer la consulta");
        this.error = "Error no se puede hacer la consulta";
      }
    },
    successful(req) {
      document.getElementById("report").innerHTML = reportName;
      img = document.getElementById("jpg-export"); // Gets image

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
        x: [2012, 2016, 2018],
        y: [25, 84, 128],
        type: 'scatter',
        mode: 'lines+markers'
      });

      this.data = datos;

      // LAYOUT

      var layout = {               
        editable: false,
        autosize: true,
        responsive: true,
        xaxis: {
          fixedrange: true
        },
        yaxis: {
          fixedrange: true
        },
        margin: {
          l: 500,
          r: 200,
          b: 150,
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
      Plotly.plot(this.$refs.scatter, this.data, layout, config).then(function(
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

    failed() {
      this.error = "Fallo estudiantes por facultad y por año!";
    },
    getYears() {
      const path = URL_INTEGRATION + "/year";
      this.error = "";
      axios
        .get(path)
        .then(request => this.yearSuccess(request))
        .catch(() => this.yearFailed());
    },
    yearSuccess(req) {
      this.arrayDateFrom = req.data;
      this.arrayDateTo = req.data;
    },
    yearFailed() {
      this.error = "Fallo busqueda en Años!";
    },
    getFaculty() {
      const path = URL_INTEGRATION + "/faculty";
      this.error = "";
      axios
        .get(path)
        .then(request => this.facultySuccess(request))
        .catch(() => this.facultyFailed());
    },
    facultySuccess(req) {
      this.facultades = req.data;
    },
    facultyFailed() {
      this.error = "Fallo busqueda en facultad!";
    }
  },
  created() {
    this.getYears();
    this.getFaculty();
  }
};
</script>