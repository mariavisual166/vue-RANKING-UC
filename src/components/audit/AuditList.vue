<template>
    <div class="container-fluid" style="margin-top: 7%;">
        <div v-if="loading==true" class="d-flex justify-content-center">
            <Spinner></Spinner>
        </div>
        <div v-else class="table-responsive-md">
            <div><h2>Auditoría</h2></div>
            <div class="row" style="margin-left: 0px">
                
                <input v-model="search" name="search" type="text" id="search" class="form-control col-3" placeholder="Buscar">
                <div class="col text-rigth" style="text-align: right;">
                    <button class="btn btn-success" v-on:click="createPDF()"><i class="fas fa-file-pdf"></i> Exportar PDF</button>
                    <button class="btn btn-danger float-right" v-on:click="clear()"><i class="fas fa-broom"></i> Limpiar</button>
                </div>
            </div>
            
            <br>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Usuario</th>
                        <th scope="col">Acción</th>
                        <th scope="col">Módulo</th>
                        <th scope="col">IP</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="audit in filteredAudit" :key="audit.id">
                        <td>{{ audit.username }}</td>
                        <td>{{ audit.action }}</td>
                        <td>{{ audit.module }}</td>
                        <td>{{ audit.ip }}</td>
                        <td>{{ audit.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</template>

<script>
import axios from 'axios';

import Spinner from '@/components/Spinner'
import { URL_USER } from '@/common/constants'
import jsPDF from "jsPDF";


// var info = [];
var date = new Date();

export default {
  name: 'AuditList',
  components: {
      Spinner
  },
  data() {
      return {
          audits: [],
          loading: true,
          search: '',
          error: false
      };  
  },
  methods: {
    auditsAll () {
      const path = URL_USER + '/historyaction';
      this.loading = true;
      axios.get(path)
       .then(request => this.auditSuccessful(request))
        .catch(() => this.auditFailed())
    },
    auditSuccessful (req) {
        console.log(req);
        this.loading = false;
        this.audits = req.data;
        // var size = req.data.length;
        // var d = req.data;

        
    },
    auditFailed () {
        this.error = 'Fallo Auditoría';
    },
    clear(){
        const path = URL_USER + '/historyaction';
        this.loading = true;
        axios.delete(path)
        .then(request => {
            console.log(request);
            this.error = request.data.message;
            this.loading = false;
            this.audits = []
         })
            .catch(() => {this.error = "Fallo eliminación"})
    },
    createPDF () {
        var info = this.audits;
        info.unshift({
            id: "ID",
            username: "Usuario",
            action: "Acción",
            module: "Módulo",
            ip: "Dirección IP",
            status: "Status",
            date: "Fecha"
        });
        console.log("info ", info);
        var doc = new jsPDF("l", "mm", "a4");

        doc.setProperties({
            title: "Auditoría",
            subject: "Auditoría",
            author: "UC Ranking",
            date: date
        });

        doc.setFont("helvetica");
        doc.setFontType("bold");
        doc.setFontSize(20);
        doc.text("Auditoría de las acciones de los usuarios", 15, 15);

        // Table
        doc.setFontSize(6);
        doc.cellInitialize();

        $.each(info, function(i, row) {
            $.each(row, function(j, cell) {
            if ((cell != "ID") & (cell != "status")) {
                if ((j != "id") & (j != "status")) {
                    if ((j == "action")) {
                        doc.cell(10, 25, 62, 15, cell, i);
                    } else {
                        doc.cell(10, 25, 40, 15, cell, i);
                    }
                }
            }
            });
        });
        doc.save("Auditoría" + ".pdf");
        info = [];
        this.audits.shift();
    }
  },
  created() {
      this.auditsAll();
  },
  mounted() {
    this.auditsAll();
  },
  computed: {
      filteredAudit: function () {
          return this.audits.filter((audit) => {
              return audit.action.match(this.search) || 
              audit.username.match(this.search) || 
              audit.module.match(this.search) || 
              audit.date.match(this.search) || 
              audit.ip.match(this.search);
          })
      }
  }
  
}
</script>
