<template>
    <div id="get-todo" class="container">
        <input class="form-control"
               :value="newUser.name"
               @change="changeUserField"
               placeholder="name"
               name="name">
        <input class="form-control"
               :value="newUser.surname"
               @change="changeUserField"
               placeholder="surname"
               name="surname">
        <input class="form-control"
               :value="newUser.phone"
               @change="changeUserField"
               placeholder="phone"
               name="phone">
        <input class="form-control"
               :value="newUser.email"
               @change="changeUserField"
               placeholder="email"
               name="email">

        <input class="form-control"
               :value="json"
               @change="changeJson"
               placeholder="JSON"
               name="json">     
        <router-link to="/"><button class="btn btn-light" @click="addUser">Save</button></router-link>
    </div>
</template>
<script>
    export default{
        methods: {
            changeUserField(e){
                this.$store.dispatch('changeUserField', {[e.target.name]: e.target.value})
            },
            changeJson(e){
                this.$store.dispatch('changeJson', e.target.value);
            },
            addUser(){
                if(~this.$store.getters.editingIndex){
                    this.$store.dispatch('editUser', this.$store.getters.editingIndex);
                } else{
                    this.$store.dispatch('addUser');
                    this.$store.dispatch('clearUser');
                }
            }
        },
        computed: {
            newUser(){
                return this.$store.getters.newUser
            },
            json(){
                return this.$store.getters.json
            }
        }

    }
</script>

<style>
    .form-control{
        margin: .5em;
    }
</style>