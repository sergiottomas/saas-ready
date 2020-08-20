<template>
  <component id="app" :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
const defaultLayout = "default-layout";

export default {
  name: "App",
  computed: {
    layout() {
      return this.$route.meta.layout ? this.$route.meta.layout : defaultLayout;
    },
  },
};
</script>

<style>
html,
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#app > footer {
  margin-top: auto;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
