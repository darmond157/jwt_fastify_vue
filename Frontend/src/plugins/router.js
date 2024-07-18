import { createWebHistory, createRouter } from "vue-router";
import store from "./vuex";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";

const routes = [
	{ path: "/dashboard", component: Dashboard },
	{ path: "/login", component: Login },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.fullPath == "/login") {
		store.commit("setJWT", "");
		next();
	} else {
		if (!store.getters.isLoggedIn) router.push("/login");
		else next();
	}
});

export default router;
