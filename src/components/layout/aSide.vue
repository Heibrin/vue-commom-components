<template>
  <div class="aSideContent">
    <el-row class="header" type="flex" justify="center">
      <el-col :span="24">
        <img src="/src/assets/logo.png" alt="" class="logo" />
        <h4>Manage System</h4>
      </el-col>
    </el-row>
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
      // console.log(this.$router.path);
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
  width: 15%;
  height: 100%;
  // background-color: #fab1a0;
  & .el-menu-vertical-demo {
    width: 100%;
  }
}
::v-deep .navitems {
  // background-color: #fab1a0;
}
::v-deep .header {
  height: 12%;
  text-align: center;
  // line-height: 12%;
  font-size: 22px;
}
::v-deep .navitems:visited {
  // background-color: #ffeaa7;
}
</style>
