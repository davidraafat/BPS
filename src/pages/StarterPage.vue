<template>
  <div class="loading-page">
    <div class="row justify-content-center fade-in-text" style=" margin: 0; padding: 0; width: 100%; height: 100vh;">
      <div class=" col-12 col-md-3" style="margin-top: auto; margin-bottom: auto;">
        <img class="fade-in-text" src="../../public/img/logo-dark.png" alt="">
        <pulse-loader :loading="this.loading" :color="'#030e4f'" :size="'40px'" style="margin-left:30%"></pulse-loader>
      </div>
    </div>
  </div>
</template>
<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'starter',
  data(){
    return {
      loading: true
    }
  },
  components: {
    PulseLoader
  },
};
</script>
<style>
.starter-page {
  min-height: calc(100vh - 95px);
}
.fade-in-text {
  animation: fadeIn 1s;
  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
  -ms-animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
