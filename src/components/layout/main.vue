<template>
  <div class="mainContent">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "main",
  data() {
    return {
      message: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.mainContent {
  height: 80%;
  width: 80%;
  background-color: cadetblue;
}
</style>
