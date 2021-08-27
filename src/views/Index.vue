<template>
  <div>
    <input
      v-model="Account"
      type="text"
      placeholder="请输入账号"
      name="username"
    >
    <input
      v-model="Password"
      type="password"
      placeholder="请输入密码"
      name="username"
    >
    <el-button
      type="primary"
      @click.prevent="handleRegister()"
    >登录</el-button>
    <el-button type="success">成功按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { UserService } from '@/api/user';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'Index',
  setup() {
    const state = reactive({
      Account: 'admin',
      Password: 'hhhh',
    });
    
    const handleLogin = async () => {
      const loginParams = {
        username: state.Account,
        password: state.Password,
      };
      const res = await UserService.login(loginParams);
       console.log(res);
    };

    const handleRegister = async () => {
      const loginParams = {
        username: state.Account,
        password: state.Password,
      };
      const res = await UserService.resgister(loginParams);
      console.log(res);
    };

    const log = () => {
      ElMessage.error('错误');
    };

    return {
      ...toRefs(state),
      handleLogin,
      handleRegister,
      log
    };
  },
});
</script>
