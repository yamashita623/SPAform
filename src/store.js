import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const state = {
  gender: "",
  birthday: "",
  question: "",
  question2nd: "",
  question3rd: "",
  consultation: "",
};

const mutations = {
  setGender(state, val) {
    state.gender = val;
  },
  setBirthday(state, val) {
    state.birthday = val;
  },
  setQuestion(state, val) {
    state.question = val;
  },
  setQuestion2nd(state, val) {
    state.question2nd = val;
  },
  setQuestion3rd(state, val) {
    state.question3rd = val;
  },
  setConsultation(state, val) {
    state.consultation = val;
  },
};

const actions = {
  setGender({ commit }, val) {
    commit("setGender", val);
  },
  setBirthday({ commit }, val) {
    commit("setBirthday", val);
  },
  setQuestion({ commit }, val) {
    commit("setQuestion", val);
  },
  setQuestion2nd({ commit }, val) {
    commit("setQuestion2nd", val);
  },
  setQuestion3rd({ commit }, val) {
    commit("setQuestion3rd", val);
  },
  setConsultation({ commit }, val) {
    commit("setConsultation", val);
  },
};

const getters = {
  getGender(state) {
    return state.gender;
  },
  getBirthday(state) {
    return state.birthday;
  },
  getQuestion(state) {
    return state.question;
  },
  getQuestion2nd(state) {
    return state.question2nd;
  },
  getQuestion3rd(state) {
    return state.question3rd;
  },
  getConsultation(state) {
    return state.consultation;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
