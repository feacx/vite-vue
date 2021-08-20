<template>
  <div v-if="isShow">
    文字
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, onUnmounted, onUpdated, ref } from 'vue';
export default defineComponent({
  setup() {
    const isShow = ref(false);

    onMounted(() => {
      console.log('mounted');
    });

    onBeforeUnmount(() => {
      console.log('onunmounted');
    });

    onUnmounted(() => {
      console.log('unmounted');
    });

    onUpdated(() => {
      console.log('updated');
    });
    
    return {
      isShow,
    };
  }
});
</script>

<style lang="scss" scoped>

</style>