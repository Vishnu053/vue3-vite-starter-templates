import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/HelloWorld.vue'
import FormDemo from "/src/views/formDemo.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/formDemo',
        name: 'FormDemo',
        component: FormDemo,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
