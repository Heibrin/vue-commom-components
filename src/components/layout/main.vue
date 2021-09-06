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
  height: 88%;
  width: 85%;
  background-color: #dfe6e9;
}
</style>
