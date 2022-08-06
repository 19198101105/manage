import Vue from 'vue'
import App from './App.vue'
import {
  Button, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown,
  DropdownItem, DropdownMenu, Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form,
  FormItem, Input, Select, Switch, DatePicker, Option, Pagination, MessageBox, Message,
  Dialog
}
  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from '../router'
import store from './store'
import http from 'axios'
import '../api/mock.js'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)



Vue.prototype.$http = http;
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home' })
  }
  else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
