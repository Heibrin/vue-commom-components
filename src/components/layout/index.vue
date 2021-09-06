<template>
  <div class="indexContent">
    <div class="side">
      <aSide class="asideCont"></aSide>
    </div>
    <div class="main">
      <aHead class="ahead" />
      <aMain class="mainCont"> </aMain>
    </div>
  </div>
</template>
<script>
import head from "@/components/layout/head.vue";
import aSide from "@/components/layout/aSide.vue";
import main from "@/components/layout/main.vue";

export default {
  name: "index",
  data() {
    return {
      message: "",
    };
  },
  components: {
    aHead: head,
    aSide,
    aMain: main,
  },
};
</script>
<style lang="scss" scoped>
.indexContent {
  height: 100%;
  // background-color: #dfe6e9;
  .side {
    height: 100%;
  }
  .main {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    width: 85%;
    margin-left: 20%;
    & .ahead {
      width: 100%;
    }
    & .mainCont {
      width: 100%;
    }
  }
}
</style>
