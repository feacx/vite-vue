<template>
  <router-view />
</template>

<script lang="ts">
import 'element-plus/packages/theme-chalk/src/base.scss';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
@import url('@/assets/scss/main.scss');
</style>
