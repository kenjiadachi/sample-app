import Vuex from 'vuex';

const store = {
  state: {
    items: [],
    user: {},
    userItems: {}
  },
  getters: {
    items: state => state.items,
    user: state => state.user,
    userItems: state => state.userItems
  },
  mutations: {
    setItems(state, { items }) {
      state.items = items;
    },
    setUser(state, { user }) {
      state.user = user;
    },
    setUserItems(state, { items }) {
      state.userItems = items;
    }
  },
  actions: {
    async fetchItems({ commit }) {
      const items = await this.$axios.$get(
        'https://qiita.com/api/v2/items?query=tag:nuxt.js'
      );
      commit('setItems', { items });
    },
    async fetchUserInfo({ commit }, { id }) {
      const [user, items] = await Promise.all([
        this.$axios.$get(`https://qiita.com/api/v2/users/${uid}`),
        this.$axios.$get(`https://qiita.com/api/v2/items?query=user:${uid}`)
      ]);
      commit('setUser', { user });
      commit('setUserItems', { items });
    }
  }
};

export default () => new Vuex.Store(store);
