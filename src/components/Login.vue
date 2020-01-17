<template>
<div>
  <Navbar class="header-border uc-ranking"></Navbar>
  <div class="fondo-login">
    <div class="container container-login-register">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header"><strong>Iniciar Sesión</strong></div>
            <div class="card-body">
              <form class="col s12" @submit.prevent="authenticate">
                <div class="alert alert-danger" v-if="error">{{ error }}</div>
                <div class="form-group row">
                  <label for="inputUsername" class="col-sm-4 col-form-label text-md-right">Usuario</label>
                  <div class="col-md-6">
                    <input v-model="username" type="username" id="inputUsername" class="form-control" placeholder="Nombre de usuario" required autofocus>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-md-4 col-form-label text-md-right">Contraseña</label>
                  <div class="col-md-6">
                    <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4 button-iniciar-sesion">
                    <button type="submit" class="btn btn-primary row">Iniciar Sesión</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
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

.uc-ranking {
  font-size: 56px;
  font-weight: bold;
  text-align: center;
  align-content: center;
  line-height: 50px;
}

</style>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios';
import { EventBus } from '@/utils'
import { URL_USER } from "@/common/constants"
import Navbar from '@/components/Navbar'

export default {
  name: 'Login',
  components: {
    Navbar
  },
  data () {
    return {
      username: '',
      password: '',
      error: false
    }
  },
  computed: {
    ...mapState('', ['user'])
  },
  methods: {
    authenticate () {
      const path = URL_USER + '/login';
      axios.post(path, { 
        username: this.username, 
        password: this.password
        })
        .then((response) => {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          console.log("Registro auditoria")
          this.$router.push('/')
          })
        .catch((error) => {
          this.error ="Usuario o contraseña incorrecta";
          localStorage.removeItem('user');
          EventBus.emit('failedAuthentication', error)
        })
    }
  },
  mounted () {
    /*EventBus.$on('failedRegistering', (msg) => {
      this.errorMsg = msg
    })*/
    if (localStorage.getItem('user')){
      //localStorage.removeItem('username');
      localStorage.removeItem('user');
    }
    EventBus.$on('failedAuthentication', (msg) => {
      this.error = msg
    })
  },
  beforeDestroy () {
    //EventBus.$off('failedRegistering')
    EventBus.$off('failedAuthentication')
  }
}
</script>

