import Msite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import Shop from '../pages/Shop/Shop'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'

export default [
  {
    path: '/',
    redirect: '/msite',
    meta:{
      showFooter:true
    }
  },
  {
    path: '/msite',
    name: 'Msite',
    component: Msite,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
    children:[
      {
        path:'/shop/goods',
        component:ShopGoods
      },
      {
        path:'/shop/ratings',
        component:ShopRatings
      },
      {
        path:'/shop/info',
        component:ShopInfo
      },
    ]

  },
  { // 配置404组件, 放在最后
    path: '/*',
    component: NotFound
  }
]
