//import 'css-loader!../css/login.css'  //行内设置loader方式
import '../css/login.css'
import '../css/login.less'
import '../css/test.css'
function login() {
    const oH2 = document.createElement('H2')
    oH2.innerHTML = 'webpack 学习'
    oH2.className = 'title'
    return oH2
}

document.body.appendChild(login())