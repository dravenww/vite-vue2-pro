import ppo from 'ppo';

/**
 * 用户数据状态管理
 */
const state = {
  token: '',
  permissionsList: [],
  userData: {
    avatar: '',
    level: '',
    username: '',
  },
  AuthData: {
    user: 'dravenwu',
    icon: 'https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/fdc4b296cebe55e27e522f32b2b8824b~300x300.image',
  },
  authority: true,
};
const actions = {
  /**
   * 设置是否能访问的权限
   * @param commit
   */
  setAuthority({ commit }, userData) {
    commit('setAuthority', userData);
  },
};
const mutations = {
  /**
   * 设置是否能访问的权限
   * @param commit
   */
  setAuthority(state, data) {
    state.authority = data;
  }
};
const getters = {
  userData(state) {
    return state.userData;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
