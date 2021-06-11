import Msite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'

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
  { // 配置404组件, 放在最后
    path: '/*',
    component: NotFound
  }
]
