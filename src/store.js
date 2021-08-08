import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
  sex:"",
  birthday:"",
  question:"",
  consultation:""
}

const mutations = {
  setSex(state,val){
    state.sex = val
  },
  setBirthday(state,val){
    state.birthday = val
  },
  setQuestion(state,val){
    state.question = val
  },
  setConsultation(state,val){
    state.consultation = val
  },
}

const actions = {
  updateSex(commit,e){
    commit('setSex',e.value)
  },
  updateBirthday(commit,e){
    commit('setBirthday',e.value)
  },
  updateQuestion(commit,e){
    commit('setQuestion',e.value)
  },
  updateConsultation(commit,e){
    commit('setConsultation',e.value)
  }
}

const getters = {
  getSex(state){
    return state.sex;
  },
  getBirthday(state){
    return state.birthday;
  },
  getQuestion(state){
    return state.question;
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