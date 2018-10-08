<template>
    <section class="main">
        <div v-if="token">
            <label>请输入发送的文字</label>
            <input type= "text" v-model="message"/>
            <button v-on:click="sendText" >发送</button>
        </div>
        <div v-else>
            <label>请输入用户名</label>
            <input type= "text" v-model="name"/>
            <button v-on:click="joinRoom" >加入直播</button>
        </div>
        <div class="contentMessages">
        </div>
    </section>
</template>

<script>
    import { connect, joinRoom, exitRoom, sendRoomText } from '../rongyun';
    import { getToken } from '../dao.js';
    export default {
        data() {
            return {
                token: '',
                message: '',
                name: ''
            };
        },
        methods: {
            joinRoom: function(event) {
                var me = this;
                getToken(this.name).then(function(response) {
                    var token = response.data.message;
                    connect(token);
                    me.token = token;
                });
            },
            sendText: function() {
                if(this.message) {
                    sendRoomText(this.message);
                }
            }
        }
    };
</script>

<style>
.main > p {
  color: #000;
}
.contentMessages {
    border: #ddd 1px solid;
}
</style>