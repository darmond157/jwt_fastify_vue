import { createMemoryHistory, createRouter } from "vue-router";

import Login from "./Login.vue";
import Signup from "./Signup.vue";
import Dashboard from "./Dashboard.vue";

const routes = [
	{ path: "/dashboard", component: Dashboard },
	{ path: "/login", component: Login },
	{ path: "/signup", component: Signup },
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
