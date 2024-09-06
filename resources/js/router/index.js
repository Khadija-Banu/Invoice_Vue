import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import invoiceIndex from '../component/invoices/index.vue'

import invoiceNew from '../component/invoices/new.vue'

import notFound from '../component/NotFound.vue'

const routes = [
    {
        path:'/',
        component: invoiceIndex
    },
    {
        path:'/invoice/new',
        component: invoiceNew
    },
    {
        path:'/:pathMatch(.*)*',
        component: notFound
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router