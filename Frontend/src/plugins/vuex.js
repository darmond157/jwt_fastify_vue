import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
	plugins: [createPersistedState()],
	state() {
		return {
			JWT: "",
		};
	},
	mutations: {
		setJWT(state, payload) {
			state.JWT = `Bearer ${payload}`;
		},
	},
	getters: {
		isLoggedIn(state) {
			return state.JWT != "";
		},
		getJWT(state) {
			return state.JWT;
		},
	},
	actions: {},
});
