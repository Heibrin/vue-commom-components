<template>
  <div class="aSideContent">
    <el-row>
      <el-col>
        <el-menu
          :default-active="this.$router.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <nav-items v-for="item in getRoute" :key="item.path" :item="item" />
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import NavItems from "@/components/layout/NavItems.vue";

export default {
  name: "aSide",
  data() {
    return {
      data: "",
    };
  },
  components: {
    NavItems,
  },
  mounted() {
    this.init();
  },
  computed: {
    getRoute() {
      return this.$router.options.routes;
    },
    getCurrentPath() {
      console.log(this.$router.path);
      return this.$router.path;
    },
  },
  methods: {
    init() {
      this.data = this.$router.match;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.aSideContent {
  width: 20%;
  height: 100%;
  background-color: bisque;
}
</style>
