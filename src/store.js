import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
  gender:"",
  birthday:"",
  question:"",
  question2nd:"",
  question3rd:"",
  consultation:""
}

const mutations = {
  setGender(state,val){
    state.gender = val
  },
  setBirthday(state,val){
    state.birthday = val
  },
  setQuestion(state,val){
    state.question = val
  },
  setQuestion2nd(state,val){
    state.question2nd = val
  },
  setQuestion3rd(state,val){
    state.question3rd = val
  },
  setConsultation(state,val){
    state.consultation = val
  },
}

const actions = {
  setGender(context,val){
    context.commit('setGender',val)
  },
  setBirthday(context,val){
    context.commit('setBirthday',val)
  },
  setQuestion(context,val){
    context.commit('setQuestion',val)
  },
  setQuestion2nd(context,val){
    context.commit('setQuestion2nd',val)
  },
  setQuestion3rd(context,val){
    context.commit('setQuestion3rd',val)
  },
  setConsultation(context,val){
    context.commit('setConsultation',val)
  }
}

const getters = {
  getGender(state){
    return state.gender;
  },
  getBirthday(state){
    return state.birthday;
  },
  getQuestion(state){
    return state.question;
  },
  getQuestion2nd(state){
    return state.question2nd;
  },
  getQuestion3rd(state){
    return state.question3rd;
  },
  getConsultation(state){
    return state.consultation;
  },
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})