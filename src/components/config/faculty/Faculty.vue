<template>
    <div class="margen">
      <div v-if="loading==true" class="d-flex justify-content-center">
          <Spinner></Spinner>
      </div>
      <div v-else>
        <div><h2>Listado de facultades</h2></div>
        <router-link to="/faculty/new" tag="button" class="btn btn-primary" style="display: -webkit-inline-box;">
          <i class="material-icons">add</i>
        </router-link>
        <div class="table-responsive-md">
          <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Inactivar</th>
                    <!-- <th></th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="faculty in faculties" :key="faculty.id">
                    <td>{{ faculty.codigo }}</td>
                    <td>{{ faculty.nombre }}</td>
                    <!-- <td>
                      <router-link :to="`/faculty/edit/${faculty.id}`" tag="button" class="btn btn-warning">
                        <i class="material-icons">edit</i>
                      </router-link>
                    </td> -->
                    <td>
                      <router-link :to="`/faculty/delete/${faculty.id}`" tag="button" class="btn btn-danger">
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
  name: 'ListFaculty',
  components: {
      Spinner
  },
  data() {
      return {
          faculties: [],
          loading: true
      };  
  },
  methods: {
    facultyAll () {
      const path = URL_INTEGRATION + '/facultad';
      this.loading = true;
      axios.get(path)
       .then(request => this.facultySuccessful(request))
        .catch(() => this.facultyFailed())
    },
    facultySuccessful (req) {
      this.loading = false;
      this.faculties = req.data;
    },
    facultyFailed () {
      this.error = 'Fallo facultades!'
    },
  },
  created() {
      this.facultyAll();
  },
  mounted() {
    this.facultyAll();
  }
  
}
</script>
