import Vue from 'vue'


import VueRouter from 'vue-router'
const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/shopcar/Shopcar')
const Profile = () =>
    import ('../views/propfile/Propfile')
const Detail = () =>
    import ('../views/detail/Detail')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcar',
        component: Cart
    },
    {
        path: '/propfile',
        component: Profile
    },
    {
        path: '/detail/:iid',
        component: Detail
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router