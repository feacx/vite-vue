<template>
  <div>
    <h1 class="title">
      {{ title }} Page
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Index',
  setup() {
    const title = ref('hello，Vue3');

    return {
      title
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
