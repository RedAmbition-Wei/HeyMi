
const state = {
  state: {
    token: '',
    userinfo: {}
  },
}

const mutations = {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INFO: (state, info) => {
      state.userinfo = info
    }
}

const actions = {
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
