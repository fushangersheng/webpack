console.log('实现轮播图的业务逻辑')
console.log('实现tabs标签页的逻辑')
import './banner.js'
import './tabs.js'
import './styles/index.css'
console.log(132)
import imgUrl from '../src/assets/assets/1.gif'
const theImg = document.createElement("img")
theImg.src = imgUrl
document.body.appendChild(theImg)
import './assets/assets/fonts/iconfont.css'
import './css/index.css'
class App {
    static a = 123
  }
  
console.log(App.a)
import Apps from './App.vue' // 根vue文件
import Vue from './vue' // 引入vue.js对象

new Vue({ 
  render: h => h(App) // 渲染函数, 渲染App组件里的标签
}).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里