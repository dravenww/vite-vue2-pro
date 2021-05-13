/**
 * 处理全局响应式设置
 */


const state = {
  // loading
  loading: false,
  // loading 展示文本
  loadingText: '',
  // 锁定history cache
  lockHistory: true,
  // 激活左侧tab
  activeSideBar: '',
};

const actions = {
  setLoading({ commit }, payload) {
    const _payload = typeof payload === 'boolean'
      ? { status: payload, text: '' } : { text: '', ...payload };
    commit('setLoading', _payload);
  },
  setLockHistory({ commit }, lock = false) {
    commit('setLockHistory', lock);
  },
  setActiveSideBar({ commit }, value = '') {
    commit('setActiveSideBar', value);
  },
};

const mutations = {
  setLoading(state, { status = false, text = '' }) {
    state.loading = status;
    state.loadingText = text;
  },
  setLockHistory(state, lock) {
    state.lockHistory = lock;
  },
  setActiveSideBar(state, value) {
    state.activeSideBar = value;
  },
};

export default {
  state,
  actions,
  mutations,
};
