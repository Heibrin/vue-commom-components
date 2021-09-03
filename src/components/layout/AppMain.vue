<template>
  <div class="appMain">
    <index />
  </div>
</template>
<script>
import index from "@/components/layout/index.vue";

export default {
  name: "appMain",
  data() {
    return {
      message: "",
    };
  },
  components: {
    index,
  },
};
</script>
<style lang="scss" scoped>
.appMain {
  height: 100%;
}
</style>
