import request from "@/utils/request";

export function Login(username, pwd){
    return request({
        url: '/login',
        method: "POST",
        data: {
            username,
            pwd
        }
    })
}