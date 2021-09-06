<template>
  <div class="headeContent">
    <el-dropdown class="right">
      <span class="el-dropdown-link">
        <!-- <div style="display:inline-block;width:40px;height:40px">
          <img src="/src/assets/logo.png" alt="" />
        </div> -->
        <span class="user ml-4">{{ getUser }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  name: "head",
  data() {
    return {
      message: "",
    };
  },
  computed: {
    getUser() {
      return "admin";
    },
    getStyle() {
      return `width:20px;border-radius:50%;background-img:url(${"../../assets/logo.png"});background-repeat:no-repeat`;
    },
  },
};
</script>
<style lang="scss" scoped>
.headeContent {
  width: 85%;
  height: 12%;
  // background-color: #74b9ff;
  & .right {
    float: right;
    margin-right: 20px;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    color: #333;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
