/**
 * 入口文件
 */
import { key } from '../../../components/header/index.js';
import './style.css';

new Vue({
    "el": "#app",
    "data": {
        "hi": "hello"
    },
    "template": "<div>{{ hi }}</div>"
})