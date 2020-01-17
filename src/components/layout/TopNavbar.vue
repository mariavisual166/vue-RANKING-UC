<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light header-border fixed-top">
       
        <router-link class="navbar-brand mr-auto text-center uc-ranking" to="/" tag="a">
            <img src="../../assets/escudo.png" width="52" height="58" class="d-inline-block align-top" alt="">
            UC RANKING 
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!--Estudiantes-->
        <div  v-if="this.user.name=='facultad_estudiante'" class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Parte central del Narbar -->
            <ul class="navbar-nav ml-auto">
                <router-link tag="li" class="nav-item" 
                v-bind:key="links[0].id" 
                :to="`${links[0].path}`"><a class="nav-link">{{links[0].name}}</a></router-link> 
            </ul>

            <!--Parte izquierdo del Narbar-->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons">person</i>{{this.user.username}}
                        <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <router-link to="/login" tag="a" class="btn btn-danger">
                            Salir
                        </router-link>
                    </div>
                </li>   
            </ul>          
        </div>
        <!--Docentes-->
        <div  v-if="this.user.name=='facultad_docente'" class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Parte central del Narbar -->
            <ul class="navbar-nav ml-auto">
                <router-link tag="li" class="nav-item" 
                v-bind:key="links[1].id" 
                :to="`${links[1].path}`"><a class="nav-link">{{links[1].name}}</a></router-link> 
            </ul>

            <!--Parte izquierdo del Narbar-->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons">person</i>{{this.user.username}}
                        <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <router-link to="/login" tag="a" class="btn btn-danger">
                            Salir
                        </router-link>
                    </div>
                </li>   
            </ul>          
        </div>
        <!--Vicerrector-->
        <div v-if="this.user.name=='vicerrector'" class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Parte central del Narbar -->
             <ul class="navbar-nav ml-auto">
                <router-link tag="li" class="nav-item" 
                v-bind:key="links[0].id" 
                :to="`${links[0].path}`"><a class="nav-link">{{links[0].name}}</a></router-link> 
                <router-link tag="li" class="nav-item" 
                v-bind:key="links[1].id" 
                :to="`${links[1].path}`"><a class="nav-link">{{links[1].name}}</a></router-link>
                <router-link tag="li" class="nav-item" 
                v-bind:key="links[3].id" 
                :to="`${links[3].path}`"><a class="nav-link">{{links[3].name}}</a></router-link>  
            </ul>

            <!--Parte izquierdo del Narbar-->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons">person</i>{{this.user.username}}
                        <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <div v-if="this.user.name=='vicerrector'">
                            <a class="btn btn-light" v-on:click="changeRoleVerify">Cambiar a rol de Verificador</a>
                        </div>
                        <div v-if="this.user.name=='verificador'">
                            <a class="btn btn-light" v-on:click="changeRoleVicerector">Cambiar a rol de Vicerrector</a>
                        </div>
                        <router-link to="/login" tag="a" class="btn btn-danger">
                            Salir
                        </router-link>
                    </div>
                </li>   
            </ul>          
        </div>
        <!--Vicerrector-->
        <div v-if="this.user.name=='verificador' && this.user.username == 'vicerrector'" class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Parte central del Narbar -->
             <ul class="navbar-nav ml-auto">
                <router-link tag="li" class="nav-item" 
                v-bind:key="links[3].id" 
                :to="`${links[3].path}`"><a class="nav-link">{{links[3].name}}</a></router-link>  
            </ul>
            
            <!--Parte izquierdo del Narbar-->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons">person</i>{{this.user.username}}
                        <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <div v-if="this.user.name=='vicerrector'">
                            <a class="btn btn-light" v-on:click="changeRoleVerify">Cambiar a rol de Verificador</a>
                        </div>
                        <div v-if="this.user.name=='verificador'">
                            <a class="btn btn-light" v-on:click="changeRoleVicerector">Cambiar a rol de Vicerrector</a>
                        </div>
                        <router-link to="/login" tag="a" class="btn btn-danger">
                            Salir
                        </router-link>
                    </div>
                </li>   
            </ul>          
        </div>
        <div v-if="this.user.name=='verificador' && this.user.username == 'verificador'" class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Parte central del Narbar -->
             <ul class="navbar-nav ml-auto">
                <router-link tag="li" class="nav-item" 
                v-bind:key="links[3].id" 
                :to="`${links[3].path}`"><a class="nav-link">{{links[3].name}}</a></router-link>  
            </ul>
            
            <!--Parte izquierdo del Narbar-->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons">person</i>{{this.user.username}}
                        <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <router-link to="/login" tag="a" class="btn btn-danger">
                            Salir
                        </router-link>
                    </div>
                </li>   
            </ul>          
        </div>
        <!--Administrador-->
        <div v-if="this.user.name=='administrador'" class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Parte central del Narbar -->
            <ul class="navbar-nav mx-auto">
                <!-- Enlaces para navegacion -->
                <router-link tag="li" class="nav-item" 
                    v-for="link in links" 
                    v-bind:key="link.id" 
                    :to="`${link.path}`"><a class="nav-link">{{link.name}}</a>
                </router-link> 
            </ul>
            <!--Parte izquierdo del Narbar-->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons">person</i>{{this.user.username}}
                        <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <router-link to="/login" tag="a" class="btn btn-danger">
                            Salir
                        </router-link>
                    </div>
                </li>   
            </ul>          
        </div>
        
    </nav>
     
</template>

<style>
.uc-ranking {
  font-size: 26px;
 /* font-weight: bold;*/
  text-align: center;
  align-content: center;
  line-height: 50px;
}

.header-border {
  /*border-bottom: 5px solid #981e32;*/
  border-right-style: hidden;
  border-left-style: hidden;
  border-top-style: hidden; 
 
  box-shadow: 
    0 0 0 1px #981e32,
    0 0 0 6px #006d55,
    0 0 0 11px #A17700;
}

/*
.header-border:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  right: -15px;
  bottom: -15px;
  z-index: -1;
}
*/


</style>

<script>
import axios from "axios";
import { mapState, mapGetters } from "vuex";
import { logout } from "@/store";
import { URL_USER } from "@/common/constants"
export default {
  name: "TopNavbar",
  data() {
    return {
      links: [
        {
          id: 0,
          name: "Estudiantes",
          path: "/CargaDeArchivoStudents"
        },
        {
          id: 1,
          name: "Docentes",
          path: "/CargaDeArchivoTeachers"
        },
        {
          id: 2,
          name: "Configuración",
          path: "/admin"
        },
        {
          id: 3,
          name: "Reportes",
          path: "/reports"
        },
        { 
          id: 4,
          name: "Auditoría",
          path: "/audit"
        }
      ]
    };
  },
  methods: {
    changeRoleVerify: function() {
      const path =
        URL_USER + "/userVerify" + "/" + this.user.id;
      axios
        .get(path)
        .then(request => {
          this.user.name = request.data.name;
          this.id_role = request.data.id;
          localStorage.setItem("user", JSON.stringify(this.user));
        })
        .catch(() => {
          console.log("FALLO");
        });
    },
    changeRoleVicerector: function() {
      const path =
        URL_USER + "/userVicerector" + "/" + this.user.id;
      axios
        .get(path)
        .then(request => {
          this.user.name = request.data.name;
          this.id_role = request.data.id;
          localStorage.setItem("user", JSON.stringify(this.user));
        })
        .catch(() => {
          console.log("FALLO");
        });
    }
  },
  mounted() {
    console.log("Usuario desde el Store: ", this.user);
    //console.log("Usuario Local: ", this.usuario.username)
    //alert(this.usuario.username);
  },
  computed: {
    ...mapGetters(["user"])
  }
};
</script>
