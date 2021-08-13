import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { ElButton, ElSelect, ElLink } from 'element-plus';

const app = createApp(App);

app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);
app.component(ElLink.name, ElLink);

app.use(router);
app.mount('#app');
