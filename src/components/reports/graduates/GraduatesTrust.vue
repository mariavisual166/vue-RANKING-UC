<template>
<div>

  
       <div class="row">
        
        <!-- <div class="col-xl-8 col-md-8 col-sm-12"> -->

           <form class="col-md-12"  @submit.prevent="getGraduates">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <div class="form-group form-row">
                <label for="inputFrom" class="col-sm-1 col-form-label text-form">Egresados válidos</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="validado">
                        <option value=null>Seleccionar</option>
                        <option v-for="validated in arrayValidated" :key="validated.id" v-bind:value="validated.value">{{ validated.codigo }}</option>
                    </select>
                </div>
                <label for="inputFrom" class="col-sm-1 col-form-label text-form">Desde</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="desde">
                        <option value=null>Seleccionar</option>
                        <option v-for="trust in arrayTrustFrom" :key="trust.id" v-bind:value="trust.id">{{ trust.codigo }}</option>
                    </select>
                </div>

                <label for="inputTo" class="col-sm-1 col-form-label text-form">Hasta</label>
                <div class="col-sm-2">
                    <select class="form-control" v-model="hasta">
                        <option value=null>Seleccionar</option>
                        <option v-for="trust in arrayTrustTo" :key="trust.id" v-bind:value="trust.id">{{ trust.codigo }}</option>
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
    
    <!-- <GRAPH> -->
    <div class="col-md-9 col-xl-9"> 
        
        <!--Title-->
        <h1 id="report" class="col-md-12  title-customized"/>     
  
        <div id="graph">         

          <!--Plotly-->
          <div ref="bar" class="vue-plotly"/> 

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
      </div>
      <!-- <div>Fecha de actualización: {{this.fecha}}</div-->
      
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

.graduates-color {
  color: #fff;
  background-color: #993343;
  font-weight: bold;
}

.graduates-color:hover{
   background-color: #981e32;
}

.border-graduates {
  border-left-color: #981e32;
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
import { URL_INTEGRATION } from "@/common/constants"

var reportName = "Nivel de Confianza Empleados";
var img;
var info = []; //Saves data for verification
var date = new Date();
var fecha;

export default {
  name: 'GraduateTrust',
  data () {
      return {
          desde: null,
          hasta: null,
          arrayTrustFrom: [],
          arrayTrustTo: [], 
          error: '',
          fecha: '',
          validado: null,
          arrayValidated: []
      }
  },
  methods: {
    getGraduates: function () {
        const path = URL_INTEGRATION+'/egresado-confianza';
        console.log(this.desde);
        console.log(this.hasta);
        console.log(this.validado);
        this.error = '';
        if (this.desde < this.hasta || this.desde == null || this.hasta == null) {
            axios.post(path, { 
                desde: this.desde, 
                hasta: this.hasta, 
                validado: this.validado
            })
                .then(request => this.successful(request))
                .catch(() => this.failed())
        } else {
            console.log("Error no se puede hacer la consulta");
            this.error = "Error no se puede hacer la consulta";
        }
    
    },
    /*  loadDate() {
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
 */
    successful (req) {
        console.log(req.data);
        document.getElementById("report").innerHTML = reportName;
      img = document.getElementById("jpg-export"); // Gets image

      document.getElementById("download-buttons").style.display = "block";

      var datos = []; // Saves data from JSON
      var d = req.data;
      var size;
      var egresados = [];
      var confianza = [];
      var total = [];
      var i;

       

      egresados = d["egresados"];
      size = egresados.length;
      console.log(egresados);
      console.log("size ", size);

      for (i = 0; i < size; i++) {
        confianza.push(egresados[i]["confianza"]);
        total.push(egresados[i]["cantidad_egresados"]);
      }

      console.log("confianza ", confianza);
      console.log("total ", total);

      datos.push({
        x: confianza,
        y: total,
        name: "Nivel de Confianza",
        type: 'bar',
         marker: {
          color: "#fc5c65",
          width: 1
        },
        hoverlabel: { font: { size: 18 } },
        insidetextfont: {
          color: "#FFFFFF",
          size: 16
        }       
      });

      this.data = datos;

      // LAYOUT
 

      var layout = {
        title: {
          text: auxDate,
          font: {
            family: 'Courier New, monospace',
            size: 12
         },
        },           
        editable: false,
        //autosize: true,
        //responsive: true,
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
      Plotly.react(this.$refs.bar, this.data, layout, config).then(function(
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

     /*  doc.setFont("helvetica");
      doc.setFontType("normal");
      doc.setFontSize(16);
      doc.text("Fecha actualización: "+this.fecha, 170, 15);
 */

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
        this.error = 'Fallo buscando egresados!';
    },
    getTrust() {
        for(var i = 1; i<=100; i++){

            this.arrayTrustFrom.push({id: i, codigo: i+"%"});
            this.arrayTrustTo.push({id: i, codigo: i+"%"});
        }
        
        this.arrayValidated.push({id: 1, value: true, codigo: "Validado"});
        this.arrayValidated.push({id: 2, value: false, codigo: "No validado"})
        
    },
  },
  created() {
      this.getTrust();
      //this.loadDate();
  },
}
</script>