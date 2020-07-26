import { GlobalStore } from 'herculex';

export default new GlobalStore({
    state: {
        test: 0
    },
    mutations: {
        updateTest(state, payload) {
            state.test = ++state.test
        }
    }
});
