import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buton-group'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        jiazai1:false,
        jiazai2:true,
        jiazai3:false
    }

})