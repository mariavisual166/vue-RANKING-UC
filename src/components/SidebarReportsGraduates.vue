<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            </h6>
            <h4 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">Reportes Egresados
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
          name: "Egresados por Facultad",
          path: "/report/GraduatesPerFaculty"
        },
        {
          id: 1,
          name: "Egresados por Año",
          path: "/report/GraduatesPerYear"
        },
        {
          id: 2,
          name: "Egresados por Año y Facultad",
          path: "/report/GraduatesYearFaculty"
        },
        // {
        //   id: 3,
        //   name: "Egresados según nivel de confianza",
        //   path: "/report/GraduatesTrust"
        // }              
      ],
       linksrank: [

        {
          id: 0,
          name: "Empleabilidad",
          path: "/report/Employability"
        }    
      ]
 
    };
  }
}
</script>

