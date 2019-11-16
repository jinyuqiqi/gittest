import { selectSingle } from '../../request/api'

const state = {
  // windowOptions: {
    showSRD: false,
    background: 'bg_beauty',
    createList: [],
    createCount: 0,
    inputLeft: 0,
    inputWidth: 0,
    searchList: null
  // }
}

const mutations = {
  MULTIPLE_ASSIGNMENT (state, object) {
    Object.assign(state, object);
  }
}

const actions = {
  getSingle ({ commit }) {
    selectSingle().then(res=> {
      console.log(res)
        commit('MULTIPLE_ASSIGNMENT', {
          createList: res.data,
          createCount: res.total
        })
    }).catch(err=> {
        
    })
    // commit('SWITCH_BACKGROUND', data)
  }
}

const getters = {
  background: state=> {
    return state.background
  },

  showSRD: state=> {
    return state.showSRD
  },

  createList: state=> {
    return state.createList
  },

  createCount: state=> {
    return state.createCount
  },

  inputLeft: state=> {
    return state.inputLeft
  },

  inputWidth: state=> {
    return state.inputWidth
  },

  searchList: state=> {
    return state.searchList
  },
}

export default {
  state,
  mutations,
  getters,
  actions
}
