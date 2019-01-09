import { key } from '../../../components/header/index.js';
import {foo, num} from './test.js';
console.log(num);
console.log(foo());
/**
 * 入口文件
 */
console.log('dd', key);
var cc = () => {
    alert(1);
}
// cc();
new Vue({
    "el": "#app",
    "data": {
        "hi": "hello"
    },
    "template": "<div>{{ hi }}</div>"
})