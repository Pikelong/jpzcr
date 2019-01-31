/**
 * Created by Administrator on 2018/11/14.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../title_components/login"
import Song_House from "../title_components/Song_House"
import My_Song from "../title_components/My_Song"
import Client from "../title_components/Client"
import Ranking_List from "../category_components/Ranking_List"
import Main from "../category_components/main"
import Songer from "../category_components/Songer"
import Song_Category from "../category_components/Song_Category"
import Search from "../search/Search"
import My_Upload from "../title_components/My_Upload"
import Song_Detail from "../song_detail/Song_Detail"
import Upload from "../title_components/Upload"
import Register from "../title_components/Register"
import Password_Forget from "../title_components/Password_Forget"
Vue.use(VueRouter)

const routes = [
    //第一层路由
    {path: '/',  redirect: '/home'},
    { path: '/login', component: Login },
    { path: '/home', component: Song_House ,
        children:[//子路由
            {path:'main',component:Main, },
            {path:'ranking_list',component:Ranking_List},
            {path:'songer',component:Songer},
            {path:'song_category',component:Song_Category},
        ],
        redirect: '/home/main'
    },
    {
        path:"/my_song",component:My_Song
    },
    {
        path:"/client",component:Client
    },
    {
        path:"/search",component:Search
    },
    {
      path:"/my_upload",component:My_Upload
    },
    {
      path:"/song_detail",component:Song_Detail
    },
    {
        path:"/upload",component:Upload
    },
    {
        path:"/register",component:Register
    },
    {
        path:"/password_forget",component:Password_Forget
    }
]

const router = new VueRouter({
    routes ,// routes: routes 的简写
    mode: 'history',
    linkActiveClass:"active"
})

export default router;
