import VueRouter from "vue-router";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Logout from "@/pages/Logout";
import NotFound from "@/pages/NotFound";

const routes = [
    {
        path: '/',
				name: "home",
				meta: {
					layout: "primary-layout"
				},
        component: Home
    },
    {
        path: '/login',
        name: "login",
        component: Login
    },
    {
        path: '/register',
        name: "register",
        component: Register
    },
    {
        path: '/logout',
        name: "logout",
        component: Logout
    },
    {
        path: '**',
        name: "not-found",
        component: NotFound
    }
]

export default new VueRouter({
    mode: "history",
    routes: routes
})