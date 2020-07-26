import { GlobalStore } from 'herculex';

export default new GlobalStore({
    state: {
        subtest: 0,
        test: 0
    },
    mutations: {
        updateSubTest(state, payload) {
            state.subtest = ++state.subtest
        },
        updatePageTest(state, payload) {
            state.test = ++state.test
        },
    }
});
