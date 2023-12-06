import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el router desde tu archivo de rutas
import 'bootstrap/dist/css/bootstrap.min.css';
const app = createApp(App);

app.use(router); // Instala el router en la aplicación

app.mount('#app');
