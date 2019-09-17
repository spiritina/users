import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: JSON.parse(localStorage.getItem('users'))|| [],
        newUser: {name:'',
                  surname:'',
                  phone:'',
                  email: ''
                },
        editingIndex: -1,
        json:''
    },
    mutations: {
        SET_ALL_USERS(state, users){
            state.users = users
        },
        CHANGE_USER_FIELD(state, key){
            state.newUser = Object.assign(state.newUser, key);
        },
        CHANGE_JSON(state, json){
            state.json = json;
        },
        ADD_USER(state){
            if(state.json){
                try{
                    state.newUser = JSON.parse(state.json)
                } catch(err){
                    console.log(err);
                }
            }
            state.json = '';
            state.users.push(state.newUser);
            state.newUser = {
                name:'',
                surname:'',
                phone:'',
                email: ''
            };
            state.editingIndex = -1;
            localStorage.setItem('users', JSON.stringify(state.users));
        },
        EDIT_USER_INDEX(state, user){
            state.editingIndex = state.users.indexOf(user);
            state.newUser = user;
        },
        EDIT_USER(state){
            if(state.json){
                try{
                    state.newUser = JSON.parse(state.json)
                } catch(err){
                    console.log(err);
                }
            };
            state.json = '';
            state[state.editingIndex] = state.newUser;
            state.newUser = {
                name:'',
                surname:'',
                phone:'',
                email: ''
            };
            state.editingIndex = -1;
            localStorage.setItem('users', JSON.stringify(state.users));
        },
        REMOVE_USER(state, user){
            let users = state.users
            users.splice(users.indexOf(user), 1)
            
        },
        CLEAR_USER(state){
            state.newUser = {
                name:'',
                surname:'',
                phone:'',
                email: ''
            };
            state.editingIndex = -1;
        }
    },
    actions: {
        changeUserField({commit}, user){
            commit('CHANGE_USER_FIELD', user)
        },
        changeJson({commit}, user){
            commit('CHANGE_JSON', user)
        },
        setAllUsers({commit}, users){
            commit('SET_ALL_USERS', users)
        },
        addUser({commit}){
            commit('ADD_USER')
        },
        editUserIndex({commit}, user){
            commit('EDIT_USER_INDEX', user)
        },
        editUser({commit}){
            commit('EDIT_USER')
        },
        removeUser({commit}, user){
            commit('REMOVE_USER', user)
        },
        completeUser({commit}, user){
            commit('COMPLETE_USER', user)
        },
        clearUser({commit}){
            commit('CLEAR_USER')
        }

    },
    getters: {
        newUser: state => state.newUser,
        users: state => state.users,
        editingIndex: state => state.editingIndex
    }

})