<template>
    <div id="current-todos" class="container">
        <h3 v-if="users.length > 0">Список пользователей</h3>
        <router-link to="/add"><button type="button" class="btn btn-light btn-sm mb-3">
                    Add user
        </button></router-link>
        <ul class="list-group">
            <li class="list-group-item " v-for="(user, index) in users" v-bind:key="index">
                <div class='d-flex justify-content-between align-items-center'> 
                    <p>{{user.name}} {{user.surname}} {{user.phone}} {{user.email}}</p>
                    <div>
                        <router-link to="/edit">
                            <button type="button" @click="edit(user)" class="btn btn-light btn-sm">
                                Edit
                            </button>
                        </router-link>
                        <button type="button" @click="remove(user)" class="btn btn-light btn-sm">
                            Delete
                        </button>
                    </div>
                </div>
            </li>
        </ul>   
    </div>
</template>
<script>
export default{
    methods: {
        edit(user){
            this.$store.dispatch('editUserIndex', user)
        },
        remove(user){
            this.$store.dispatch('removeUser', user)
        },
        setAllUsers(users){
            this.$store.dispatch('setAllUsers', users)
        }
    },
    computed: {
        users(){
            return this.$store.getters.users
        }
    }
}
</script>
