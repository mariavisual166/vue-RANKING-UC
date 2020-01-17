<template>
    <div class="container-fluid margen">
      <div v-if="loading==true" class="d-flex justify-content-center">
          <Spinner></Spinner>
      </div>
      <div v-else>
        <div><h2>Listado de usuarios</h2></div>
        <router-link to="/admin/new" tag="button" class="btn btn-primary" style="display: -webkit-inline-box;">
          <i class="material-icons">add</i>
        </router-link>
        <div class="table-responsive-md">
          <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Nombre de Usuario</th>
                    <th scope="col">Correo</th>
                    <!-- <th scope="col">Teléfono</th>
                    <th scope="col">Dirección</th> -->
                    <th scope="col">Role</th>
                    <th scope="col">Editar</th>
                    <th>Inactivar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.username }}</td>
                    <!-- <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td> -->
                    <td>{{ user.address }}</td>
                    <td>{{ user.name }}</td> <!--El nombre del role-->
                    <td>
                      <router-link :to="`/admin/edit/${user.id}`" tag="button" class="btn btn-warning">
                        <i class="material-icons">edit</i>
                      </router-link>
                    </td>
                    <td>
                      <router-link :to="`/admin/delete/${user.id}`" tag="button" class="btn btn-danger">
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

import New from '@/components/admin/New'
import Edit from '@/components/admin/Edit'
import Spinner from '@/components/Spinner'
import { URL_USER } from "@/common/constants"

export default {
  name: 'List',
  components: {
      New,
      Edit,
      Spinner
  },
  data() {
      return {
          users: [],
          loading: true
      };  
  },
  methods: {
    usersAll () {
      const path = URL_USER + '/user';
      this.loading = true;
      axios.get(path)
       .then(request => this.userSuccessful(request))
        .catch(() => this.loginFailed())
    },
    userSuccessful (req) {
      this.loading = false;
      this.users = req.data;
      //this.$router.replace(this.$route.query.redirect || '/bodyUser')
    },
    loginFailed () {
      this.error = 'User failed!'
    },
  },
  created() {
      this.usersAll();
  },
  mounted() {
    this.usersAll();
  }
  
}
</script>
