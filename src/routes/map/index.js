/**
 * Created by Administrator on 2017/1/5.
 */

import home from './modules/home';
import notice from './modules/notice';
import approval from './modules/approval';
import email from './modules/email';

export default [
    ...home,
    ...notice,
    ...approval,
    ...email,
    //所有引用的路由，放在这句备注之前，否则会出错
    {
        path: '/', //强制跳转到home页
        redirect: '/home'
    },
    {
        path: '*', //其他页面，强制跳转到首页
        redirect: '/'
    },
]
