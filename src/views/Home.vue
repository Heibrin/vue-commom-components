<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <appMain />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import appMain from "@/components/layout/AppMain.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
    appMain,
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
