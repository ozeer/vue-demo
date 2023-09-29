import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App)
app.mount("#app");

app.config.errorHandler = (err) => {
	/* 处理错误 */
    console.log("处理错误");
    
};
