import { connect, joinRoom, exitRoom, sendRoomText } from './rongyun';
import Vue from 'vue'
import App from './pages/app.vue'

new Vue({
    el:"#root",
    render:h=>h(App)
})