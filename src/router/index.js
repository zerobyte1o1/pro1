import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'
import News from '../components/news/news'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Index,
        children: [{
                path: '/',
                redirect: '/news'

            }, {
                path: '/news',
                component: News
            }


        ]

    }

]

const router = new VueRouter({
    routes
})

export default router