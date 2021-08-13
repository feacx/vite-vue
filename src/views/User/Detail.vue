<template>
  <div>用户页面 {{ $route.params.id }}</div>
  <div>
    <el-link
      href="https://element.eleme.io"
      target="_blank"
    >
      默认链接
    </el-link>
    <el-link type="primary">
      主要链接
    </el-link>
    <el-link type="success">
      成功链接
    </el-link>
    <el-link type="warning">
      警告链接
    </el-link>
    <el-link type="danger">
      危险链接
    </el-link>
    <el-link type="info">
      信息链接
    </el-link>
  </div>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">
        主要按钮
      </el-button>
      <el-button type="success">
        成功按钮
      </el-button>
      <el-button type="info">
        信息按钮
      </el-button>
      <el-button type="warning">
        警告按钮
      </el-button>
      <el-button type="danger">
        危险按钮
      </el-button>
    </el-row>
  </div>

  <el-row>
    <el-button round>
      圆角按钮
    </el-button>
    <el-button
      type="primary"
      round
    >
      主要按钮
    </el-button>
    <el-button
      type="success"
      round
    >
      成功按钮
    </el-button>
    <el-button
      type="info"
      round
    >
      信息按钮
    </el-button>
    <el-button
      type="warning"
      round
    >
      警告按钮
    </el-button>
    <el-button
      type="danger"
      round
    >
      危险按钮
    </el-button>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
