var chatRoomId = "room1";
var appkey = "qd46yzrfqi85f";

var init = function () {
    console.log("init rongyun");
    RongIMLib.RongIMClient.init(appkey);
    RongIMClient.setConnectionStatusListener({
        onChanged: function (status) {
            switch (status) {
                case RongIMLib.ConnectionStatus.CONNECTED:
                    console.log('链接成功');
                    break;
                default:
                    console.log("链接不成功 status: %s", status);
            }
        }
    });

    // 消息监听器
    RongIMClient.setOnReceiveMessageListener({
        // 接收到的消息
        onReceived: function (message) {
            // 判断消息类型
            switch (message.messageType) {
                case RongIMClient.MessageType.TextMessage:
                    // message.content.content => 消息内容
                    console.log("TextMessage 收到消息, %o", message);
                    break;
                case RongIMClient.MessageType.CommandMessage:
                    // do something...
                    console.log("CommandMessage 收到消息, %o", message);
                    break;
                    break;
                case RongIMClient.MessageType.UnknownMessage:
                    // do something...
                    console.log("UnknownMessage 收到消息, %o", message);
                    break;
                default:
                    console.log("defalt 收到消息, %o", message);
                    // do something...
            }
        }
    });
}

export var connect = function (token) {
    RongIMClient.connect(token, {
        onSuccess: function (userId) {
            console.log("Connect successfully" + userId);
            joinRoom();
        },
        onTokenIncorrect: function () {
            console.log('token无效');
        },
        onError: function (errorCode) {
            var info = '';
            switch (errorCode) {
                case RongIMLib.ErrorCode.TIMEOUT:
                    info = '超时';
                    break;
                case RongIMLib.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:
                    info = '不可接受的协议版本';
                    break;
                case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
                    info = 'appkey不正确';
                    break;
                case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
                    info = '服务器不可用';
                    break;
            }
            console.log(errorCode);
        }
    });
}

export var joinRoom = function () {
    var count = 10; // 拉取最近聊天最多 50 条。
    RongIMClient.getInstance().joinChatRoom(chatRoomId, count, {
        onSuccess: function () {
            console.log("加入聊天室成功。")
        },
        onError: function (error) {
            console.log("加入聊天室失败")
        }
    });
}
export var exitRoom = function () {
    RongIMClient.getInstance().quitChatRoom(chatRoomId, {
        onSuccess: function () {
            console.log("退出聊天室成功。")
        },
        onError: function (error) {
            console.log("退出聊天室失败。")
        }
    });
}

export var sendRoomText = function (txtMsg) {
    var msg = new RongIMLib.TextMessage({
        content: txtMsg || "hello RongCloud!",
        extra: "附加信息"
    });
    var conversationtype = RongIMLib.ConversationType.CHATROOM; // 群组会话类型
    var targetId = chatRoomId; // 目标 Id
    RongIMClient.getInstance().sendMessage(conversationtype, targetId, msg, {
        onSuccess: function (message) {
            console.log("Send successfully , message: %o", message);
        },
        onError: function (errorCode, message) {
            var info = '';
            switch (errorCode) {
                case RongIMLib.ErrorCode.TIMEOUT:
                    info = '超时';
                    break;
                case RongIMLib.ErrorCode.UNKNOWN_ERROR:
                    info = '未知错误';
                    break;
                case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                    info = '在黑名单中，无法向对方发送消息';
                    break;
                case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                    info = '不在讨论组中';
                    break;
                case RongIMLib.ErrorCode.NOT_IN_GROUP:
                    info = '不在群组中';
                    break;
                case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                    info = '不在聊天室中';
                    break;
                default:
                    info = x;
                    break;
            }
            console.log('发送失败:' + info);
        }
    });
}
// 开始就初始化
init();