import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
Vue.use(VueRouter)
let router = new VueRouter({
    routes:[
        {
            path:'/',component:index
        }
    ]
})
export default router