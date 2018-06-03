/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/email/list',//邮件
        name:'email/list',
        component: resolve => require(['views/email/list'], resolve)
    },
]
