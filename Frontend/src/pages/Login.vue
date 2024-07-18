<template>
    <div>
        Login
    </div>
    <input type="text" v-model="username" />
    <input type="text" v-model="password" />
    <button @click="login">login</button>
</template>

<script>
import axios from "../plugins/axios"
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {

        async login() {
            await axios.post("/login", {
                username: this.username,
                password: this.password
            }).then((res) => {
                this.$store.commit("setJWT", res.data.jwt)
                this.$router.push("/login")
            }).catch((err) => {
                console.log(err);
            })
        }
    },
}
</script>