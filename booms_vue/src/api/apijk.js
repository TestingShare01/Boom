import request from "../utils/request"

export function apitag(){
    return request({
        url:"tag",
        method:"GET",
    })
}

export function addtag(tagname){
    return request({
        url:"tag",
        method:"POST",
        data:{
            tagname
        }
    })
}

export function updataApi(name,urls,head,method,tag,canshu){
    return request({
        url:"jk",
        method:"POST",
        data:{
            name,
            urls,
            head,
            method,
            tag,
            canshu,
        }
    })
}

export function jks(datas,user){
    return request({
        url:"jk",
        method:"POST",
        data:{
            datas,
            user,
        }
    })
}