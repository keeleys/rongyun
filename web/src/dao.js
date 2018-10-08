import axios from 'axios'

export var getToken = function(memberId) {
    var name = "memberName_"+memberId;
    return axios.get('/api/rongyun/token', { params: {
        memberId: memberId,
        memberName: name
    }});
};