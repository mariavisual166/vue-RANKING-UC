<template>
    <div>
        <div class="container margen">
            <div class="col s12"><h2>Inactivar la carrera {{codigo}}</h2></div>
            <form class="col s12" @submit.prevent="deleteProfession">
                <div class="form-group">
                    <p>La acción no puede deshacerse.</p>
                    <router-link to="/profession" tag="button" class="btn btn-primary">
                        Cancelar
                    </router-link>
                    <button type="submit" class="btn btn-danger">Eliminar</button>
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
    name: 'DeleteProfession',
    data () {
        return {
            id: this.$route.params.id,
            codigo: '',
            nombre: '',
            semestre_anho: '',
            pregrado_postgrado: '',
            id_facultad: '',
            facultad: '',
            error: false
        }
    },
    methods: {
        findById () {
            const path = URL_INTEGRATION + '/carrera/'.concat(this.id);
            axios.get(path)
            .then(request => this.findByIdSuccess(request))
            .catch(() => console.log("Fallo buscando carrera"))
        },
        findByIdSuccess(request) {
            this.id = request.data.id;
            this.codigo = request.data.codigo;
            this.nombre = request.data.nombre;
            this.id_facultad = request.data.id_facultad;
            this.facultad = request.data.facultad;
            this.semestre_anho = request.data.semestre_anho;
            this.pregrado_postgrado = request.data.pregrado_postgrado;     
        },
        deleteProfession () {
            const path = URL_INTEGRATION + '/carrera/' + this.id;
            axios.delete(path)
                .then(request => this.successful(request))
                .catch(() => this.failed())
        },
        successful (req) {
            this.$router.replace(this.$route.query.redirect || '/profession')
        },
        failed () {
            this.error = 'Fallo carrera'
        }
    },
    created () {
        this.findById();
    }
}
</script>

