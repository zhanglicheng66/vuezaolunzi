import Vue from 'vue'
import Button from './button'
import Icon from './icon'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
new Vue({
    el:'#app',
    data:{
        jiazai1:false,
        jiazai2:true,
        jiazai3:false
    }

})