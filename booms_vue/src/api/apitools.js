import request from "../utils/request"

export function devdata(username,dev_status,devname,version,size,serial,remark){
    return request({
        url:"dev",
        method:"POST",
        data:{
            username,
            dev_status,
            devname,
            version,
            size,
            serial,
            remark,
        }
    })
}

export function getDevData(res){
    return request({
        url:"dev",
        method:"GET",
        params:{"dev":res}
    })
}

export function delDev(id){
    return request({
        url:"dev",
        method:"delete",
        data:{
            id
        }
    })
}
