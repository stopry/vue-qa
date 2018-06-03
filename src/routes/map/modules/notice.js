/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/notice/:type',//公告|发文
        name:'notice',
        component: resolve => require(['views/notice'], resolve)
    },
    {
        path: '/notice/detail/:id',//公告|发文详情
        name:'notice/detail',
        component: resolve => require(['views/notice/detail'], resolve)
    },
]
