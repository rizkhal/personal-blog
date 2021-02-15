export default {
  state: {
    theme: null,
  },
  mutations: {
    set_theme(state, theme) {
      state.theme = theme;
      window.localStorage.theme = theme;
    },
  },
  actions: {
    initTheme({ commit }) {
      const cachedTheme = window.localStorage.theme
        ? window.localStorage.theme
        : false;

      const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;

      if (cachedTheme) {
        commit("set_theme", cachedTheme);
      } else if (userPrefersDark) {
        commit("set_theme", userPrefersDark);
      } else {
        commit("set_theme", "light");
      }
    },
    toggleTheme({ commit }) {
      switch (localStorage.theme) {
        case "light":
          commit("set_theme", "dark");
          break;

        default:
          commit("set_theme", "light");
          break;
      }
    },
  },
};
