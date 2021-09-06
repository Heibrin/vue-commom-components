<template>
  <div class="userinfo">
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in getBreadCrumb" :key="item.path">{{
          item.title
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="info-search"></div>
  </div>
</template>
<script>
export default {
  name: "UserInfoList",
  data() {
    return {
      message: "",
    };
  },
  computed: {
    getBreadCrumb() {
      console.log(this.$route.matched);
      console.log(
        _.map(this.$route.matched, (item) => {
          return {
            path: item.path,
            title: item.meta.title,
          };
        })
      );
      return _.map(this.$route.matched, (item) => {
        return {
          path: item.path,
          title: item.meta.title,
        };
      });
    },
  },
};
</script>
