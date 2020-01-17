<template>
    <div>
        <div class="container margen">
            <div class="col s12"><h2>Inactivar el usuario {{username}}</h2></div>
            <form class="col s12" @submit.prevent="deleteUser">
                <div class="form-group">
                    <p>La acción no puede deshacerse.</p>
                    <router-link to="/admin" tag="button" class="btn btn-primary">
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
import { URL_USER } from "@/common/constants"

export default {
    name: 'Delete',
    data () {
        return {
            id: this.$route.params.id,
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
            error: false
        }
    },
    methods: {
        findById () {
            const path = URL_USER + '/user'.concat('/' + this.id);
            axios.get(path)
            .then(request => this.findByIdSuccess(request))
            .catch(() => console.log("Error Login"))
        },
        findByIdSuccess(request) {
            this.id = request.data.id;
            this.first_name = request.data.first_name;
            this.last_name = request.data.last_name;
            this.email = request.data.email;
            this.password = request.data.password;
            this.username = request.data.username;
        },
        deleteUser () {
            const path = URL_USER + '/user/' + this.id;
            axios.delete(path, {data: {user: this.user.username}})
                .then(request => this.userSuccessful(request))
                .catch(() => this.userFailed())
        },
        userSuccessful (req) {
            this.$router.replace(this.$route.query.redirect || '/admin')
        },
        userFailed () {
            this.error = 'User failed!'
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
