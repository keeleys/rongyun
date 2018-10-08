import { connect, joinRoom, exitRoom, sendRoomText } from './rongyun';
window.connect = connect;
window.joinRoom = joinRoom;
window.sendRoomText = sendRoomText;

import Vue from 'vue'
import App from './pages/app.vue'

new Vue({
    el:"#root",
    render:h=>h(App)
})