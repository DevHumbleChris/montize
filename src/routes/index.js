import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layout/index.vue'),
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('../views/dashboard/index.vue')
            },
            {
                path: '/categories',
                name: 'Categories',
                component: () => import('../views/categories/index.vue')
            },
            {
                path: '/expenses',
                name: 'Expenses',
                component: () => import('../views/expenses/index.vue')
            },
            {
                path: '/profile',
                name: 'Profile',
                component: () => import('../views/profile/index.vue')
            },
            {
                path: '/reports',
                name: 'Reports',
                component: () => import('../views/reports/index.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/:path(.*)',
        name: 'Error404',
        component: () => import('../views/Error404/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router