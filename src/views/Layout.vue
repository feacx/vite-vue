<template>
  <el-container>
    <el-aside width="200px">
      <div>
        <router-link to="/">
          第一个 {{ num }}
        </router-link>
      </div>
      <div>
        <router-link to="/about">
          第二个
        </router-link>
      </div>
    </el-aside>
    <el-container>
      <el-header>{{ key }}</el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {

    let num = ref(0);

    const route = useRoute();
    onMounted(() => {
      console.log('载入', route.path);
      num.value = 1;
    });

    const key = computed(() => {
      return route.path;
    });

    return {
      key,
      num
    };
  },
});
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
Î