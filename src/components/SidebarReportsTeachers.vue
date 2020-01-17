<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            </h6>
            <h4 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">Reportes Docentes
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
          name: "Docentes con Doctorado por Facultad",
          path: "/report/TeachersWithAPhDPerFaculty"
        },
        {
          id: 1,
          name: "Docentes Extranjeros por Facultad",
          path: "/report/TeachersNationalityFaculty"
        },
        {
          id: 2,
          name: "Docentes por Escalafón",
          path: "/report/ProportionOfTeachersByRank"
        },
         {
          id: 3,
          name: "Docentes por Sexo",
          path: "/report/TeachersSexFaculty"
        },
        {
          id: 4,
          name: "Publicaciones por Facultad",
          path: "/report/PublicationsPerFaculty"
        }
        
       
      ],
       linksrank: [

        {
          id: 0,
          name: "Citaciones por Facultad",
          path: "/report/CitationsPerFaculty"
        },
        {
          id: 1,
          name: "Docentes con Doctorado",
          path: "/report/StaffWithAPhD"
        },
        {
          id: 2,
          name: "Docentes Extranjeros",
          path: "/report/ProportionOfInternationalFaculty"
        },
         {
          id: 3,
          name: "Publicaciones por Docente",
          path: "/report/PublicationsPerTeacher"
        }, 
        {
          id: 4,
          name: "Docentes Empleados / Estudiantes Matriculados",
          path: "/report/FacultyStudentRatioTeacher"
        }          
      ]
    };
  }
}
</script>

