export default {
  state: {
    count: 5,
  },
  mutations: {
    set(state, count) {
      state.count = count;
    },
  },
  actions: {
    setCount({ commit }, val) {
      commit("set", val);
    },
  },
  getters: {
    count(state) {
      return state.count;
    },
  },
};
