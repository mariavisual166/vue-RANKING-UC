<template>
    <div>
        <div class="container margen">
          <div class="col s12"><h2>Nueva carrera</h2></div>
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
                <div class="form-group required">
                    <label for="inputFaculty" class="control-label">Facultad</label>
                    <select class="form-control" v-model="id_facultad">
                    <option disabled value="">Seleccionar Facultad</option>
                    <option v-for="faculty in faculties" :key="faculty.id" v-bind:value="faculty.id">{{ faculty.codigo }}</option>
                    </select>
                </div>
                <div class="form-group required">
                    <label for="inputSemestreAnho" class="control-label">Semestre o año</label>
                    <select class="form-control" v-model="semestre_anho">
                        <option disabled value="">Seleccionar</option>
                        <!-- <option v-for="faculty in faculties" :key="faculty.id" v-bind:value="faculty.id">{{ faculty.codigo }}</option> -->
                        <option value="1">Semestre</option>
                        <option value="0">Año</option>
                    </select>
                </div>
                <div class="form-group required">
                    <label for="inputPregradoPostgrado" class="control-label">Pregrado o Postgrado</label>
                    <select class="form-control" v-model="pregrado_postgrado">
                        <option disabled value="">Seleccionar</option>
                        <!-- <option v-for="faculty in faculties" :key="faculty.id" v-bind:value="faculty.id">{{ faculty.codigo }}</option> -->
                        <option value="1">Pregrado</option>
                        <option value="0">Postgrado</option>
                    </select>
                </div>                        
                <div class="form-group row col-md-8">
                    <div>
                    <!--a class="btn btn-danger margin" style="margin-right: 8px;" type="button" href="/admin">Cancelar</a-->
                    <router-link to="/profession" tag="button" style="margin-right: 8px;" class="btn btn-danger">
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
  name: 'NewProfession',
    components: {
        Spinner
    },
    data () {
        return {
            codigo: '',
            nombre: '',
            semestre_anho: '',
            pregrado_postgrado: '',
            id_facultad: '',
            facultad: '',
            error: false, 
            faculties: [],
            loading: false
        }
    },
    methods: {
        savePost: function () {
        const path = URL_INTEGRATION + '/carrera';
        axios.post(path, { 
            codigo: this.codigo, 
            nombre: this.nombre, 
            id_facultad: this.id_facultad, 
            semestre_anho: this.semestre_anho,
            pregrado_postgrado: this.pregrado_postgrado
            })
            .then(request => this.professionSuccessful(request))
            .catch(() => this.professionFailed())
        },
        professionSuccessful (req) {
            this.$router.replace(this.$route.query.redirect || '/profession')
        },
        professionFailed () {
            this.error = 'Fallo carrera'
        },
        facultiesAll () {
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
            this.error = 'Fallo facultad'
        },
    },
    created() {
            this.facultiesAll();
    }
}
</script>