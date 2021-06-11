import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'
import {reqAddress,reqCategorys,reqShops} from '../api'

export default {
  async getAddress({commit, state}){
    const geohash = state.latitude+','+state.longitude;
    const result = await reqAddress(geohash);
    if(result.code ===0 ){
      const address = result.data;
      commit(RECEIVE_ADDRESS,{address});
    }
  },
  async getCategorys({commit, state}){
    const result = await reqCategorys();
    if(result.code ===0 ){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS,{categorys});
    }
  },
  async getShops({commit, state}){
    const {latitude,longitude} = state;
    const result = await reqShops(latitude,longitude);
    if(result.code ===0 ){
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops});
    }
  }
}
