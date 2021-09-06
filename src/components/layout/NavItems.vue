<template>
  <div class="navitems" v-if="!item.hidden">
    <el-menu-item v-if="!item.children" :index="item.path + ''">
      <i v-if="item.meta.icon" :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i v-if="item.meta.icon" :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <NavItems v-for="son in item.children" :key="son.path" :item="son" />
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "NavItems",
  data() {
    return {
      message: "",
      items: {},
      test: {
        meta: {
          icon: "",
          title: "1222",
        },
      },
      navList: {},
    };
  },
  mounted() {
    // console.log(!this.data.children);
    // console.log("1" + new Date());
    // console.log(this.item);
  },
  props: {
    item: {
      type: [Array, Object],
      default: () => {
        return {};
      },
    },
  },
  methods: {},
};
</script>
