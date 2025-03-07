<template>
  <div id="app">
    <StarterPage v-if="loading" />
    <div v-else>
      <router-view name="header" />
        <div class="wrapper">
          <router-view />
        </div>
      <router-view name="footer" />
    </div>
  </div>
</template>
<script>
import StarterPage from './pages/StarterPage.vue';
export default {
  async afterRouteEnter(){
    if(this.routeName != this.$route.name){
      this.loading = true;
      setTimeout(() =>{this.loading = false},1000);
      this.routeName = this.$route.name
    }
  },
  async created(){
    this.loading = true;
    setTimeout(() =>{this.loading = false},1000);
  },
  data(){
    return {
      loading: false,
      routeName: this.$route.name
    }
  },
  components:{
    StarterPage
  },
}
</script>
<style></style>
