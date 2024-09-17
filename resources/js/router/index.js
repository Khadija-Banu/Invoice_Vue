import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import invoiceIndex from '../component/invoices/index.vue'

import invoiceNew from '../component/invoices/new.vue'

import invoiceShow from '../component/invoices/show.vue'

import invoiceEdit from '../component/invoices/edit.vue'

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
        path:'/invoice/show/:id',
        component: invoiceShow,
        props:true
    },
    {
        path:'/invoice/edit/:id',
        component: invoiceEdit,
        props:true
    },
    // {
    //     path:'/invoice/delete_invoice/:id',
    //     component: invoiceEdit,
    //     props:true
    // },
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