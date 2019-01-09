
import { key } from '../../../components/header/index.js';
import './style.css';
import myImg from './i/logo.jpeg';

console.log('myImg', myImg);
new Vue({
    "el": "#app",
    "data": {
        "hi": key,
        "myImg": myImg
    },
    "template": '<div><img v-bind:src="myImg">{{ hi }}</div>'
})