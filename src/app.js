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
import  chai from 'chai'
import  spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

//单元测试
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'shezhi'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'shezhi',
            loading:true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'shezhi'

        }
    })
    button.$mount(div)
    button.$mount()
    let svg = button.$el.querySelector('svg')
    let{order}=window.getComputedStyle(svg)
    expect(order).to.eq("1")
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'shezhi',
            iconPosition:'right'

        }
    })
    button.$mount(div)
    button.$mount()
    let svg = button.$el.querySelector('svg')
    let{order}=window.getComputedStyle(svg)
    expect(order).to.eq("2")
    button.$el.remove()
    button.$destroy()
}
{

    //mock

    const Constructor = Vue.extend(Button)
    const gbutton = new Constructor({
        propsData:{
            icon:'shezhi'

        }
    })
    button.$mount()
    let spy = chai.spy(function()=> {})
    button.$on('click',spy)
    let button = gbutton.$el
    button.click()
    expect(spy).to.have.been.called()
}