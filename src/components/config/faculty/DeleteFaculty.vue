<template>
    <div>
        <div class="container margen">
            <div class="col s12"><h2>Inactivar la facultad {{codigo}}</h2></div>
            <form class="col s12" @submit.prevent="deleteFaculty">
                <div class="form-group">
                    <p>La acción no puede deshacerse.</p>
                    <router-link to="/faculty" tag="button" class="btn btn-primary">
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
    name: 'Delete',
    data () {
        return {
            id: this.$route.params.id,
            codigo: '',
            nombre: '',
            error: false
        }
    },
    methods: {
        findById () {
            const path = URL_INTEGRATION + '/facultad'.concat('/' + this.id);
            axios.get(path)
            .then(request => this.findByIdSuccess(request))
            .catch(() => console.log("Error Login"))
        },
        findByIdSuccess(request) {
            this.id = request.data.id;
            this.codigo = request.data.codigo;
            this.nombre = request.data.nombre;
        },
        deleteFaculty () {
            const path = URL_INTEGRATION + '/facultad/' + this.id;
            axios.delete(path)
                .then(request => this.successful(request))
                .catch(() => this.failed())
        },
        successful (req) {
            this.$router.replace(this.$route.query.redirect || '/faculty')
        },
        failed () {
            this.error = 'Fallo facultad'
        }
    },
    created () {
        this.findById();
    }
}
</script>

