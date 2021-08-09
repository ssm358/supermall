import { request } from "./requeset";

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}