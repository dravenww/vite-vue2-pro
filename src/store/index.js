import Vue from 'vue';
import Vuex from 'vuex';

// 各个模块
import user from './modules/user';
import setting from './modules/setting';


import { Message, MessageBox } from 'element-ui';
/**
 * 全局状态管理
 */
const state = {

};
const actions = {

  /**
   * 显示提示 msg.type 类型  msg.data 消息内容
   * @param commit
   * @param msg
   */
  showMassage(store, msg) {
    const Alert = MessageBox.alert;
    if (msg.type === 'error') {
      Alert(msg.message || msg.data, '请求失败!', {
        type: msg.type,
        showConfirmButton: false,
      });
    } else {
      Message({
        type: msg.type,
        message: msg.message || msg.data,
      });
    }
  },
};
const mutations = {};
const getters = {};

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    user,
    setting,
  },
});
