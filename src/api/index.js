import request from '../api/request'

// 获取云盘文件
export function getDiskContent(){
    return request({
        url: '/getfileList',
        method: 'get'
    })
}

// // 获取所有评价
export function getAllComments(){
    return request({
        url:'/getComments',
        method:'get'
    })
}