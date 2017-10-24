/**
 * Created by saturn on 2017/8/8.
 */

import * as axios from '../axios/';
import * as types from '../type/';

// 数据源
const state = {
  swiper_data: {
    title:'swiper_title11',
    desc:'swiper_desc22',
    info:'swiper_info33',
    params:[{
      label: '宽度：',
      value: '20cm'
    }],
    pics:[{
      url: 'https://static.vux.li/demo/1.jpg'
    }]
  }
};

const getters = {
  detail_swiper: state => state.swiper_data
};

const actions = {
  detail_goods({commit},id) {
    axios.getDetailGoods(id,res => {
      commit(types.Get_Detail_Goods, res);
    })
  }
};

const mutations = {
  [types.Get_Detail_Goods](state, res){
    state.swiper_data = res;
    state.swiper_data['params'] = [{
      label: '宽度：',
      value: '20cm'
    }, {
      label: '高度：',
      value: '20cm'
    }, {
      label: '颜色：',
      value: '白色'
    }, {
      label: '型号：',
      value: 'RY119'
    }];
  }
};


export default {
  state,
  actions,
  mutations,
  getters
}
