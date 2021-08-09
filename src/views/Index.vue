<template>
  <div>
    <h1>{{ title }} Page</h1>
  </div>
</template>

<script>
export default {
  name: 'Index',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    return {
      title: 'Index'
    };
  },
};
</script>

<style lang="scss" scoped>
</style>