<template>
    <div class="container-fluid margen">
        <div v-if="loading==true" class="d-flex justify-content-center">
            <Spinner></Spinner>
        </div>
        <div v-else class="table-responsive-md">
            <div><h2>Listado de parámetros del sistema</h2></div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Definición</th>
                        <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="systemParameter in systemParameters" :key="systemParameter.id">
                        <td>{{ systemParameter.codigo }}</td>
                        <td>{{ systemParameter.nombre }}</td>
                        <td>{{ systemParameter.descripcion }}</td>
                        <td>{{ systemParameter.definicion }}</td>
                        <td>
                            <router-link :to="`/integration/edit/${systemParameter.id}`" tag="button" class="btn btn-warning">
                            <i class="material-icons">edit</i>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</template>

<script>
import axios from 'axios';


import Spinner from '@/components/Spinner'
import { URL_INTEGRATION } from "@/common/constants"

export default {
  name: 'SystemParameterList',
  components: {
      /*New,
      Edit*/
      Spinner
  },
  data() {
      return {
          systemParameters: [],
          loading: true
      };  
  },
  methods: {
    systemParameterAll () {
      const path = URL_INTEGRATION + '/parametroSistema';
      this.loading = true; 
      axios.get(path)
       .then(request => this.successful(request))
        .catch(() => this.failed())
    },
    successful (req) {
        this.loading = false;
        this.systemParameters = req.data;
        //this.$router.replace(this.$route.query.redirect || '/bodyUser')
    },
    failed () {
      this.error = 'System Parameter failed!'
    }
  },
  created() {
      this.systemParameterAll();
  }
  /*mounted() {
      this.systemParameterAll();
  }*/
}
</script>


