<template>
    <div class="container-fluid" style="margin-top: 7%;">
        <div v-if="loading==true" class="d-flex justify-content-center">
            <Spinner></Spinner>
        </div>
        <div v-else class="table-responsive-md">
            <div><h2>Monitoreo de microservicios</h2></div>
            <div class="d-flex bd-highlight mb-4" style="margin-left: 0px">
                
                <div class="mr-auto bd-highlight">
                    <input v-model="search" name="search" type="text" id="search" class="form-control" placeholder="Buscar">
                </div>
                <!-- 1 todas activadas -->
                <div v-if="this.taskStudents==true && this.taskTeachers==true && this.taskGraduates==true" class="bd-highlight" style="text-align: right;">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cog"></i> Tareas programadas
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(true)"><i class="fas fa-play"></i> Activar todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(false)"><i class="fas fa-pause"></i> Detener todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveStudents(false)"><i class="fas fa-pause"></i> Detener tares para estudiantes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveTeachers(false)"><i class="fas fa-pause"></i> Detener tarea para docentes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveGraduates(false)"><i class="fas fa-pause"></i> Detener tarea para egresados</a>
                        </div>
                    </div>
                </div>
                <!-- 2 todas desactivadas -->
                <div v-if="this.taskStudents==false && this.taskTeachers==false && this.taskGraduates==false" class="bd-highlight" style="text-align: right;">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cog"></i> Tareas programadas
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(true)"><i class="fas fa-play"></i> Activar todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(false)"><i class="fas fa-pause"></i> Detener todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveStudents(true)"><i class="fas fa-play"></i> Activar tarea para estudiante</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveTeachers(true)"><i class="fas fa-play"></i> Activar tarea para docentes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveGraduates(true)"><i class="fas fa-play"></i> Activar tarea para egresados</a>
                        </div>
                    </div>
                </div>
                <!-- 3 verdad, falso, falso -->
                <div v-if="this.taskStudents==true && this.taskTeachers==false && this.taskGraduates==false" class="bd-highlight" style="text-align: right;">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cog"></i> Tareas programadas
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(true)"><i class="fas fa-play"></i> Activar todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(false)"><i class="fas fa-pause"></i> Detener todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveStudents(false)"><i class="fas fa-pause"></i> Detener tares para estudiantes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveTeachers(true)"><i class="fas fa-play"></i> Activar tarea para docentes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveGraduates(true)"><i class="fas fa-play"></i> Activar tarea para egresados</a>
                        </div>
                    </div>
                </div>
                <!-- 4 verdad, verdad, falso -->
                <div v-if="this.taskStudents==true && this.taskTeachers==true && this.taskGraduates==false" class="bd-highlight" style="text-align: right;">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cog"></i> Tareas programadas
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(true)"><i class="fas fa-play"></i> Activar todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(false)"><i class="fas fa-pause"></i> Detener todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveStudents(false)"><i class="fas fa-pause"></i> Detener tares para estudiantes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveTeachers(false)"><i class="fas fa-pause"></i> Detener tarea para docentes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveGraduates(true)"><i class="fas fa-play"></i> Activar tarea para egresados</a>
                        </div>
                    </div>
                </div>
                <!-- 5 falso, falso, verdad -->
                <div v-if="this.taskStudents==false && this.taskTeachers==false && this.taskGraduates==true" class="bd-highlight" style="text-align: right;">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cog"></i> Tareas programadas
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(true)"><i class="fas fa-play"></i> Activar todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(false)"><i class="fas fa-pause"></i> Detener todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveStudents(true)"><i class="fas fa-play"></i> Activar tarea para estudiante</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveTeachers(true)"><i class="fas fa-play"></i> Activar tarea para docentes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveGraduates(false)"><i class="fas fa-pause"></i> Detener tarea para egresados</a>
                        </div>
                    </div>
                </div>
                <!-- 6 verdad, falso, verdad -->
                 <div v-if="this.taskStudents==true && this.taskTeachers==false && this.taskGraduates==true" class="bd-highlight" style="text-align: right;">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cog"></i> Tareas programadas
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(true)"><i class="fas fa-play"></i> Activar todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(false)"><i class="fas fa-pause"></i> Detener todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveStudents(false)"><i class="fas fa-pause"></i> Detener tares para estudiantes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveTeachers(true)"><i class="fas fa-play"></i> Activar tarea para docentes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveGraduates(false)"><i class="fas fa-pause"></i> Detener tarea para egresados</a>
                        </div>
                    </div>
                </div>
                <!-- 7 falso, verdad, verdad -->
                <div v-if="this.taskStudents==false && this.taskTeachers==true && this.taskGraduates==true" class="bd-highlight" style="text-align: right;">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cog"></i> Tareas programadas
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(true)"><i class="fas fa-play"></i> Activar todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(false)"><i class="fas fa-pause"></i> Detener todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveStudents(true)"><i class="fas fa-play"></i> Activar tarea para estudiante</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveTeachers(false)"><i class="fas fa-pause"></i> Detener tarea para docentes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveGraduates(false)"><i class="fas fa-pause"></i> Detener tarea para egresados</a>
                        </div>
                    </div>
                </div>
                <!-- 8 falso, verdad, falso -->
                <div v-if="this.taskStudents==false && this.taskTeachers==true && this.taskGraduates==false" class="bd-highlight" style="text-align: right;">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cog"></i> Tareas programadas
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(true)"><i class="fas fa-play"></i> Activar todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskAll(false)"><i class="fas fa-pause"></i> Detener todas las tares</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveStudents(true)"><i class="fas fa-play"></i> Activar tarea para estudiante</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveTeachers(false)"><i class="fas fa-pause"></i> Detener tarea para docentes</a>
                            <a class="btn btn-secondary dropdown-item" v-on:click="taskActiveGraduates(true)"><i class="fas fa-play"></i> Activar tarea para egresados</a>
                        </div>
                    </div>
                </div>
                <div class="bd-highlight">
                    <button class="btn btn-success" v-on:click="createPDF()"><i class="fas fa-file-pdf"></i> Exportar PDF</button>
                </div>
                <div class="bd-highlight">
                    <button class="btn btn-danger float-right" v-on:click="clear()"><i class="fas fa-broom"></i> Limpiar</button>
                </div>
            </div>
            
            <br>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Actividad</th>
                        <th scope="col">Mensaje de error</th>
                        <th scope="col">Tipo de error</th>
                        <th scope="col">URL del microservicio</th>
                        <th scope="col">Fecha</th>
                        <!-- <th scope="col">Fecha</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="audit in filteredAudit" :key="audit.id">
                        <td>{{ audit.activity }}</td>
                        <td>{{ audit.message }}</td>
                        <td>{{ audit.type }}</td>
                        <td>{{ audit.endpoint }}</td>
                        <td>{{ audit.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapGetters } from "vuex";
import Spinner from '@/components/Spinner'
import { URL_INTEGRATION } from '@/common/constants'
import jsPDF from "jsPDF";


// var info = [];
var date = new Date();

export default {
  name: 'MicroservicesError',
  components: {
      Spinner
  },
  data() {
      return {
          microservicesError: [],
          loading: true,
          search: '',
          error: false,
          taskStudents: true,
          taskTeachers: true,
          taskGraduates: true
      };  
  },
  methods: {
    auditsAll () {
      const path = URL_INTEGRATION + '/microservices';
      this.loading = true;
      axios.get(path)
       .then(request => this.auditSuccessful(request))
        .catch(() => this.auditFailed())
    },
    auditSuccessful (req) {
        console.log(req.data);
        this.loading = false;
        this.microservicesError = req.data     
    },
    auditFailed () {
        this.error = 'Fallo Auditoría';
    },
    clear(){
        const path = URL_INTEGRATION + '/microservices';
        // this.loading = true;
        axios.delete(path)
        .then(request => {
            console.log(request);
            this.error = request.data.message;
            // this.loading = false;
            this.microservicesError = []
         })
            .catch(() => {this.error = "Fallo eliminación"})
    },
    createPDF () {
        var info = this.microservicesError;
        info.unshift({
            id: "ID",
            activity: "Actividad",
            message: "Mensaje de error",
            type: "Tipo de error",
            endpoint: "URL del microservicio",
            date: "Fecha"
        });
        console.log("info ", info);
        var doc = new jsPDF("l", "mm", "a4");

        doc.setProperties({
            title: "Monitoreo de microservicios",
            subject: "Monitoreo de microservicios",
            author: "UC Ranking",
            date: date
        });

        doc.setFont("helvetica");
        doc.setFontType("bold");
        doc.setFontSize(20);
        doc.text("Monitoreo de microservicios", 15, 15);

        // doc.text("Mensaje de error", 5, 20);

        // Table
        doc.setFontSize(6);
        doc.cellInitialize();

        $.each(info, function(i, row) {
            $.each(row, function(j, cell) {
            if ((cell != "ID") & (cell != "status")) {
                if ((j != "id") & (j != "status")) {
                    if ((j == "activity")) {
                        doc.cell(5, 25, 62, 15, cell, i);
                    }else if ((j == "message")) {
                        doc.cell(5, 25, 110, 15, cell, i);
                    } else if (j == "endpoint") {
                        doc.cell(5, 25, 45, 15, cell, i);
                    } else if (j == "date") {
                        doc.cell(5, 25, 25, 15, cell, i);
                    } else {
                        doc.cell(5, 25, 25, 15, cell, i);      
                    }
                }
            }
            });
        });
        doc.save("MicroservicesError" + ".pdf");
        info = [];
        this.microservicesError.shift();
    },
    getTaskStudents() {
        const path = URL_INTEGRATION + '/taskSchedulerStudents';
        axios.get(path)
        .then(request => {
            if (request.data.definicion == "0"){
                this.taskStudents = false;
            } else {
                this.taskStudents = true;
            }
                
            })
        .catch(() => {console.log("Error buscando tarea programada")})
    },
    getTaskTeachers() {
        const path = URL_INTEGRATION + '/taskSchedulerTeachers';
        axios.get(path)
        .then(request => {
            if (request.data.definicion == "0"){
                this.taskTeachers = false;
            } else {
                this.taskTeachers = true;
            }
                
            })
        .catch(() => {console.log("Error buscando tarea programada")})
    },
    getTaskGraduates() {
        const path = URL_INTEGRATION + '/taskSchedulerGraduates';
        axios.get(path)
        .then(request => {
            if (request.data.definicion == "0"){
                this.taskGraduates = false;
            }
            else
            {
                this.taskGraduates = true;
            }
                
            })
        .catch(() => {console.log("Error buscando tarea programada")})
    },
    taskActiveStudents(active) {
        const path = URL_INTEGRATION + '/taskSchedulerStudents';
        axios.post(path, {
            "active": active,
            user: this.user.username
        })
        .then(request => {
            if (request.data.definition.definicion == "0"){
                this.taskStudents = false;
            } else {
                this.taskStudents = true;
            }
            this.microservicesError = request.data.activityMicroservices;
            })
        .catch(() => {console.log("Error buscando tarea programada")})
    },
    taskActiveTeachers(active) {
        const path = URL_INTEGRATION + '/taskSchedulerTeachers';
        axios.post(path, {
            "active": active,
            user: this.user.username
        })
        .then(request => {
            if (request.data.definition.definicion == "0"){
                this.taskTeachers = false;
            } else {
                this.taskTeachers = true;
            }
            this.microservicesError = request.data.activityMicroservices;
            })
        .catch(() => {console.log("Error buscando tarea programada")})
    },
    taskActiveGraduates(active) {
        const path = URL_INTEGRATION + '/taskSchedulerGraduates';
        axios.post(path, {
            "active": active,
            user: this.user.username
        })
        .then(request => {
            console.log(request.data);
            if (request.data.definition.definicion == "0"){
                this.taskGraduates = false;
            } else {
                this.taskGraduates = true;
            }
            this.microservicesError = request.data.activityMicroservices;
            })
        .catch(() => {console.log("Error buscando tarea programada")})
    },
    taskAll(active) {
        const path = URL_INTEGRATION + '/taskSchedulerAll';

        axios.post(path, {"active": active, user: this.user.username})
            .then(request => {
                if (request.data.definicion == "0"){
                    this.taskGraduates = false;
                    this.taskTeachers = false;
                    this.taskStudents = false;
                } else {
                    this.taskGraduates = true;
                    this.taskTeachers = true;
                    this.taskStudents = true;
                }
                this.microservicesError = request.data.activityMicroservices;
            })
            .catch(() => {console.log("Error buscando tarea programada")})
    }
  },
  created() {
    this.auditsAll();
    this.getTaskStudents();
    this.getTaskTeachers();
    this.getTaskGraduates();
  },
  mounted() {
    this.auditsAll();
    this.getTaskStudents();
    this.getTaskTeachers();
    this.getTaskGraduates();
  },
  computed: {
      filteredAudit: function () {
          return this.microservicesError.filter((microservices) => {
              return microservices.activity.toLowerCase().match(this.search) || 
              microservices.message.toLowerCase().match(this.search) ||
              microservices.type.toLowerCase().match(this.search) || 
              microservices.endpoint.toLowerCase().match(this.search) ||
              microservices.date.toLowerCase().match(this.search)
          })
      },
      ...mapGetters(["user"])
  }
  
}
</script>
