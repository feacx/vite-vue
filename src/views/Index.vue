<template>
  <div>
    <h1 class="title">
      {{ title }} Page
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
  name: 'Index',
  setup() {
    const title = ref('hello，Vue3');

    let isShow: Ref<boolean> = ref(false);

    const toggle = () => {
      isShow.value = false;
    };

    return {
      title,
      isShow,
      toggle,
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
