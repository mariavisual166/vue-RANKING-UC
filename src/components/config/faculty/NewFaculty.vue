<template>
    <div>
        <div class="container margen">
          <div class="col s12"><h2>Nueva facultad</h2></div>
            <form class="col s12" @submit.prevent="savePost">
              <div class="alert alert-danger" v-if="error">{{ error }}</div>
              <div class="form-group required">
                <label for="code" class="control-label">Código</label>
                <input v-model="codigo" type="text" id="code" class="form-control" placeholder="Código" required>
              </div>
              <div class="form-group required">
                <label for="name" class="control-label">Nombre</label>
                <input v-model="nombre" type="text" id="name" class="form-control" placeholder="Nombre" required>
              </div>
              <div class="form-group row col-md-8">
                <div>
                  <!--a class="btn btn-danger margin" style="margin-right: 8px;" type="button" href="/admin">Cancelar</a-->
                   <router-link to="/faculty" tag="button" style="margin-right: 8px;" class="btn btn-danger">
                   Cancelar
                  </router-link>
                </div>
                <div>
                  <button class="btn btn-primary" type="submit">Guardar</button>
                </div>
              </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Spinner from '@/components/Spinner'
import { mapState, mapGetters } from "vuex";
import { URL_INTEGRATION } from "@/common/constants"
export default {
  name: 'New',
  components: {
    Spinner
  },
   data () {
    return {
        codigo: '',
        nombre: '',
		    error: false, 
        loading: false
    }
  },
   methods: {
    savePost: function () {
    const path = URL_INTEGRATION + '/facultad';
    //this.loading = true;
    axios.post(path, { 
      codigo: this.codigo, 
      nombre: this.nombre, 
      })
        .then(request => this.successful(request))
        .catch(() => this.failed())
    },
    successful (req) {
      this.$router.replace(this.$route.query.redirect || '/faculty')
    },
    failed () {
    this.error = 'Fallo facultad'
    }
  }
}
</script>