<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            </h6>
            <h4 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">Reportes Estudiantes
            </h4>  
            <hr>
            <ul class="nav flex-column">
                <router-link tag="li" class="nav-item"
                    v-for="link in links"
                    v-bind:key="link.id"
                    :to="`${link.path}`">
                    <a class="nav-link" style= "font-size:16px !important">
                        {{link.name}}
                    </a>
                </router-link>
            </ul>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            </h6>
            <h4 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">Indicadores para el Ranking QS
            </h4>  
            <hr>
            <ul class="nav flex-column">
                <router-link tag="li" class="nav-item"
                    v-for="link in linksrank"
                    v-bind:key="link.id"
                    :to="`${link.path}`">
                    <a class="nav-link" style= "font-size:16px !important">
                        {{link.name}}
                    </a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
//import axios from "axios";
//import { mapState, mapGetters } from "vuex";
//import { URL_USER } from "@/common/constants"
export default {
  name: "SidebarStudents",
  data() {
    return {
      links: [
        {
          id: 0,
          name: "Estudiantes de Pregrado Extranjeros",
          path: "/report/UndergraduateStudentsNationality"
        },
        {
          id: 1,
          name: "Estudiantes de Pregrado por Sexo",
          path: "/report/UndergraduateStudentsSex"
        },
        {
          id: 2,
          name: "Estudiantes con Discapacidad",
          path: "/report/StudentsDisabilityPerFaculty"
        },
         {
          id: 3,
          name: "Estudiantes Extranjeros por Facultad",
          path: "/report/ForeignStudentsPerFaculty"
        },
        {
          id: 4,
          name: "Estudiantes Pertenecientes a Grupos Étnicos",
          path: "/report/StudentsEthnicGroupsPerFaculty"
        },
        {
          id: 5,
          name: "Estudiantes por Sexo",
          path: "/report/StudentsSexFaculty"
        },
         {
          id: 6,
          name: "Estudiantes por Año",
          path: "/report/StudentsPerYear"
        },
        {
          id: 7,
          name: "Estudiantes por Año y Facultad",
          path: "/report/StudentsYearFaculty"
        }
       
      ],
       linksrank: [
        {
          id: 0,
          name: "Estudiantes Extranjeros",
          path: "/report/ProportionOfInternationalStudents"
        },
        {
          id: 1,
          name: "Estudiantes por Facultad",
          path: "/report/ProportionOfStudentsPerFaculty"
        },
        {
          id: 2,
          name: "Docentes Empleados / Estudiantes Matriculados",
          path: "/report/FacultyStudentRatioStudent"
        }       
      ]
    };
  }
}
</script>

