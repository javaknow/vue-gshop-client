import Vue from 'vue'
import {reqGoods, reqRatings, reqInfo} from '../../api'
import { RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO, ADD_FOOD_COUNT, REDUCE_FOOD_COUNT } from '../mutation-types'

const state = {
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
  cartFoods: [], // 购物车中food数组
}


const mutations ={
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [ADD_FOOD_COUNT](state, {food}) {
    if(!food.count){
      // 给food添加一个新的属性, 内部不会进行数据劫持, 没有数据绑定
      // food.count = 1
      // 向响应式对象中添加一个属性，并确保这个新属性同样是响应式的
      Vue.set(food,'count',1);
    }else {
      food.count++
    }
  },
  [REDUCE_FOOD_COUNT](state, {food}) {
    if(food.count){
      food.count--
    }
  },
}

const actions = {
  async getGoods({commit}, cb) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      typeof cb==='function' && cb()
    }
  },

  async getRatings({commit}, cb) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      //cb && cb()  cb不为空则调用,两种简单写法
      typeof cb==='function' && cb()
    }
  },

  async getInfo({commit}) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  updateFoodCount({commit},{isAdd, food}){
    if(isAdd){
      commit(ADD_FOOD_COUNT,{food});
    }else{
      commit(REDUCE_FOOD_COUNT,{food});
    }
  }
}

const getters={}


export default {
  state,
  mutations,
  actions,
  getters
}
