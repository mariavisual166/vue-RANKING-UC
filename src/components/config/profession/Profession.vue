<template>
    <div class="margen">
      <div v-if="loading==true" class="d-flex justify-content-center">
          <Spinner></Spinner>
      </div>
      <div v-else>
        <div><h2>Listado de carreras</h2></div>
        <div class="row">
            <div class="col">
                <router-link to="/profession/new" tag="button" class="btn btn-primary float-left" style="display: -webkit-inline-box;">
                    <i class="material-icons">add</i>
                </router-link>
            </div>
            <input v-model="search" name="search" type="text" id="search" class="form-control col-3" placeholder="Buscar" style="margin-right: 1%;">
        </div>
       
        
        <div class="table-responsive-md">
          <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Facultad</th>
                    <th scope="col">Semestre o Año</th>
                    <th scope="col">Pregrado o Postgrado</th>
                    <th scope="col">Inactivar</th>
                    <!-- <th></th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="profession in filteredProfession" :key="profession.id">
                    <td>{{ profession.codigo }}</td>
                    <td>{{ profession.nombre }}</td>
                    <td>{{ profession.facultad}}</td>
                    <td v-if="profession.tipo_semestre_anho == 1">Semestre</td>
                    <td v-else>Año</td>
                    <td v-if="profession.tipo_pregrado == 1">Pregrado</td>
                    <td v-else>Postgrado</td>
                    <!-- <td>
                      <router-link :to="`/profession/edit/${profession.id}`" tag="button" class="btn btn-warning">
                        <i class="material-icons">edit</i>
                      </router-link>
                    </td> -->
                    <td>
                      <router-link :to="`/profession/delete/${profession.id}`" tag="button" class="btn btn-danger">
                        <i class="fas fa-ban" style="color:black;"></i>
                      </router-link>
                    </td>
                </tr>
              </tbody>
            </table>   
        </div>
       </div>  
  </div>
</template>

<script>
import axios from 'axios';

import Spinner from '@/components/Spinner'
import { URL_INTEGRATION } from "@/common/constants"

export default {
  name: 'ListProfession',
  components: {
      Spinner
  },
  data() {
      return {
          professions: [],
          loading: true,
          search: '',
      };  
  },
  methods: {
    professionAll () {
      const path = URL_INTEGRATION + '/carrera';
      this.loading = true;
      axios.get(path)
       .then(request => this.professionSuccessful(request))
        .catch(() => this.professionFailed())
    },
    professionSuccessful (req) {
      this.loading = false;
      this.professions = req.data;
    },
    professionFailed () {
      this.error = 'Fallo carreras!'
    },
  },
  created() {
      this.professionAll();
  },
  mounted() {
    this.professionAll();
  },
   computed: {
      filteredProfession: function () {
          return this.professions.filter((profession) => {
              return profession.codigo.match(this.search) || 
              profession.nombre.match(this.search) || 
              profession.facultad.match(this.search); 
            //   || 
            //   profession.tipo_semestre_anho.match(this.search) || 
            //   profession.tipo_pregrado.match(this.search);
          })
      }
  }
  
}
</script>
