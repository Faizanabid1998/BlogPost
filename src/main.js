import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/main.css'
import TheButton from './components/ui/TheButton.vue'
import NavBar from './components/ui/NavBar'
 


const app=createApp(App)
app.component('the-button',TheButton)
app.component('nav-bar',NavBar)

app.mount('#app')
