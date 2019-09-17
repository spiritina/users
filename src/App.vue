   <template>
  <div id="app" class="container">
    <router-view>
    </router-view>
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue'
import CurrentUsers from './components/CurrentUsers.vue'

export default {
  components: {
    AddUser,
    CurrentUsers
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
