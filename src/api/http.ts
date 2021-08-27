import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { ElMessage } from 'element-plus';

const showStatus = (code: number | string) => {
  let message = '';
  switch (code) {
    case 401:
      message = '请先登录';
      break;
    case '000000':
      message = '请求成功';
      break;
    default:
      message = `请求失败${code}`;
      break;
  }
  return message;
};

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  withCredentials: true,
  timeout: 10000,
  validateStatus() {
    return true;
  },
  transformRequest: [data => {
    data = JSON.stringify(data);
    return data;
  }],
  transformResponse: [data => {
    if (typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data);
      return data;
    }
  }]
});

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map();
/**
 * 添加请求
 * @param {Object} config 
 */
const addPending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data)
  ].join('&');
  config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
    if (!pending.has(url)) { // 如果 pending 中不存在当前请求，则添加进去
      pending.set(url, cancel);
    }
  });
};
/**
 * 移除请求
 * @param {Object} config 
 */
const removePending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    qs.stringify(config.params),
    qs.stringify(config.data)
  ].join('&');
  if (pending.has(url)) { // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url);
    cancel(url);
    pending.delete(url);
  }
};

/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = (): void => {
  for (const [url, cancel] of pending) {
    cancel(url);
  }
  pending.clear();
};

// 请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
  removePending(config); // 在请求开始前，对之前的请求做检查取消操作
  addPending(config); // 将当前请求添加到 pending 中
  const token = localStorage.getItem('token');
  token && (config.headers.Authorization = `${token}`);
  return config;
}, (error) => {
  // 错误抛到业务代码
  error.data = {};
  error.data.message = '服务器异常，请联系管理员！';
  return Promise.resolve(error);
});

// 响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
  removePending(response); // 在请求结束后，移除本次请求
  const status = response.status;
  let message = '';
  if (status < 200 || status >= 300) {
    // 处理http错误，抛到业务代码
    message = showStatus(status);
    if (typeof response.data === 'string') {
      response.data = { message };
    } else {
      response.data.message = message;
    }
  }
  return response;
}, (error) => {
  if (axios.isCancel(error)) {
    console.log('repeated request: ' + error.message);
  } else {
    error.data = {};
    error.data.msg = '请求超时或服务器异常！';
    ElMessage.error(error.data.msg);
  }
  return Promise.reject(error);
});

export default service;
