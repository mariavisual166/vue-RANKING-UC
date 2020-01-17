<template>
    <div>
        <div class="container margen">
          <div class="col s12"><h2>Editar parámetro del sistema</h2></div>
            <form class="col s12" @submit.prevent="save">
              <div class="alert alert-danger" v-if="error">{{ error }}</div>
              <div class="form-group required">
                <label for="codigo" class="control-label">Código</label>
                <input v-model="codigo" type="text" id="codigo" class="form-control" placeholder="Código" readonly>
              </div>            
              <div class="form-group required">
                <label for="nombre" class="control-label">Nombre</label>
                <input v-model="nombre" type="text" id="nombre" class="form-control" placeholder="Nombre" required>
              </div>
              <div class="form-group required">
                <label for="descripcion" class="control-label">Descripción</label>
                <!--input v-model="descripcion" type="text" id="descripcion" class="form-control" placeholder="Descripción" required-->
                <textarea v-model="descripcion" class="form-control" id="descripcion" rows="3" required></textarea>
              </div>
              <div class="form-group required">
                <label for="definicion" class="control-label">Definición</label>
                <!--input v-model="definicion" type="text" id="definicion" class="form-control" placeholder="Definición" required-->
                <textarea v-model="definicion" class="form-control" id="definicion" rows="3" required></textarea>
              </div>
              <div class="form-group row col-md-8">
                <div>
                   <router-link to="/integration" tag="button" style="margin-right: 8px;" class="btn btn-danger">
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
import { mapState, mapGetters } from "vuex";
import { URL_INTEGRATION } from "@/common/constants"

export default {
  name: 'SystemParameterEdit',
   data () {
    return {
        id: this.$route.params.id,
        nombre: '',
        codigo: '',
        descripcion: '',
        definicion: '',
		    error: false
    }
  },
   methods: {
    save: function () {
    const path = URL_INTEGRATION + '/parametroSistema' + '/' + this.id;
    axios.put(path, {
      id: this.id, 
      codigo: this.codigo, 
      nombre: this.nombre, 
      descripcion: this.descripcion, 
      definicion: this.definicion,
      user: this.user.username
      })
        .then(request => this.successful(request))
        .catch(() => this.failed())
    },
    successful (req) {
      this.$router.replace(this.$route.query.redirect || '/integration')
    },
    failed () {
      this.error = 'System Parameter failed!'
    },
    findById () {
        const path = URL_INTEGRATION + '/parametroSistema'.concat('/' + this.id);
        axios.get(path)
        .then(request => this.findByIdSuccess(request))
        .catch(() => console.log("Error FINDBYID"))
    },
    findByIdSuccess(request) {
        this.id = request.data.id;
        this.codigo = request.data.codigo;
        this.nombre = request.data.nombre;
        this.descripcion = request.data.descripcion;
        this.definicion = request.data.definicion;           
    }
  },
  created () {
      this.findById();
  },
  computed: {
    ...mapGetters(["user"])
  }
}
</script>