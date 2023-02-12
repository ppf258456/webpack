//直接将css 引入js中
import './style/index.css'
// 引入图片
import pic from './assets/2.jpg'

document.body.insertAdjacentHTML("beforeend", "<h2>哈哈哈哈哈</h2>"); 

document.body.insertAdjacentHTML("beforeend",`<img src="${pic}">`)