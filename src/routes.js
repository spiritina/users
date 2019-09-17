import AddUser from './components/AddUser.vue';
import CurrentUsers from './components/CurrentUsers.vue';

export const routes = [

  {path: '', component: CurrentUsers},
  {path: '/edit', component: AddUser},
  {path: '/add', component: AddUser}

];
