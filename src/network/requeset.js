import axios from 'axios'
export function request(config) {
    //创建axios 实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // instance.interceptors.request.use(config = {
    //     return config
    // }, err => {
    //     console.log(err)
    // })

    instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            console.log(err)
        })
        //发送真正的网络请求
    return instance(config)
}








//  return new Promise((resolve, reject) => {
//         //创建axios 实例
//         const instance = axios.create({
//                 baseURL: 'http://123.207.32.32:8000',
//                 timeout: 5000
//             })
//             //发送真正的网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(rej => {
//                 reject(err)
//             })

//     })