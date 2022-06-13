import { createStore } from "vuex";

export default createStore({
    state: {
        items: []
    },
    mutations: {
        index_items(state, items) {
            state.items = items;
        },

        add_item(state, item) {
            state.items.push(item);
        },

        remove_item(state, id) {
            state.items = state.items.filter(item => {
                item.id != id
            })
        }
    },
    actions: {
        index_items({ commit }, items) {
            commit('index_items', items)
        },

        add_item({ commit }) {
            commit('add_item')
        },

        remove_item({ commit }) {
            commit('remove_item')
        }
    },
    modules: {

    },
})