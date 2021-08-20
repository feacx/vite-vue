<template>
  <div>
    <h1>{{ title }} Page</h1>
    <button @click="toggle">
      切换
    </button>
    <my-test />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import MyTest from '@/components/MyTest.vue';

export default defineComponent({
  name: 'Index',
  components: {
    MyTest
  },
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