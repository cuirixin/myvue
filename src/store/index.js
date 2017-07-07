import Vue from 'vue'
import Vuex from 'vuex'
import api from './fetch'  // es5可以直接用方法 （script之后）  es6用方法源文件必须有export输出此方法

Vue.use(Vuex)
const state={
	count: {},
	user:[]
}
const mutations={
	COUNT(state,res) {
      state.count=res
    },
    USER(state,res){
      state.user=res		
    }
}
const actions={
	count({commit},res){
		commit('COUNT',res)
	},
	user({commit},req){
		api(req.method,req.url,req.param,(data)=>{commit('USER', data)})
	},
	ps({commit},req){
		api(req.method,req.url,req.param,(data)=>{  // 返回数据之后的回调
			req['RELOADGET']&&req['RELOADGET']()    // 使用req传过来的方法 进行重新回调(这边是回调重新get数据)  也可以用其他的方法
		})
	}
}
 const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store // 必须写  其他取件才能用  要不会undefine
