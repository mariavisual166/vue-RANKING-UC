<template>

    <nav class="col-md-2 d-none d-md-block bg-light sidebar" >
      
        <div class="sidebar-sticky" >
            <!-- style="margin-top: 30%;" -->
            <h3 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted" >Estudiantes</h3>
            <hr>  
            <div v-if="(this.user.name=='vicerrector' || this.user.name=='administrador' )"> 
                <ul class="nav flex-column">
                    <router-link tag="li" class="nav-item"
                  
                        v-for="link in links"
                        v-bind:key="link.id"
                        :to="`${link.path}`">
                        
                        
                        <a  class="nav-link" style="font-size: 16px !important;">
                            {{link.name}}
        
                        </a>
                        
                    </router-link>
                    <blockquote>
                          
                      </blockquote>
                      <blockquote>
                          
                      </blockquote>
                            
                        <blockquote>
                          
                      </blockquote>
                </ul>
            </div>
            <div v-else>
                  <ul class="nav flex-column">
                    <router-link tag="li" class="nav-item"
                  
                        v-for="link in links2"
                        v-bind:key="link.id"
                        :to="`${link.path}`">          
                        <a  class="nav-link" style="font-size: 16px !important;">
                            {{link.name}}
        
                        </a>
                        
                    </router-link>
                    <blockquote>
                          
                      </blockquote>
                      <blockquote>
                          
                      </blockquote>
                            
                        <blockquote>
                          
                      </blockquote>
                </ul>
            </div>  

        </div>
        

         
    </nav>




</template>

<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";
import { URL_USER } from "@/common/constants"
export default {
  name: "SidebarEstudiante",
  data() {
    return {
      links: [
        {
          id: 0,
           name: "Carga de archivo",
          path: "/CargaDeArchivoStudents"
          
        },
        {
          id: 1,
          name: "Fechas límites",
          path: "/FechaTopeStudents"
        },
        {
          id: 2,
         name: "Fechas de últimas actualizaciones",
          path: "/FechaActualizacionStudents"
        }
      ],

      links2: [
        {
          id: 0,
           name: "Carga de archivo",
          path: "/CargaDeArchivoStudents"
          
        }

      ]

    };
  },
  
  mounted() {
    // console.log("osi: ", this.user.name);
    
  },
computed:{
         ...mapGetters(["user"])
}
};
</script>
