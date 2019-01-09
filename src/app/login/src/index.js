
// import { key } from '../../../components/header/index.js';
// import '../../../components/header/style.css';
// import myImg from '../../../components/header/i/logo.jpeg';

import header from '../../../components/header'; //引入模块
// import footer from '../../../components/footer'; //引入模块

console.log('header', header);
new Vue({
    "el": "#app",
    "data": {
        "hi": 'key',
        "myImg": 'myImg'
    },
    "template": '<div><img v-bind:src="myImg">{{ hi }}</div>'
})