import Mock from 'mockjs'
import data from './data.json'

// goods的接口
Mock.mock('/goods', {code: 0, data: data.goods})
// ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
// info的接口
Mock.mock('/info', {code: 0, data: data.info})

console.log('mockServer....')
// export  不需要向外暴露任何东西
