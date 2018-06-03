/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/approval',//审批
        name:'approval',
        component: resolve => require(['views/approval'], resolve)
    },
    {
        path: '/approval/list/:type',//审批列表
        name:'approval/list',
        component: resolve => require(['views/approval/list'], resolve)
    },
    {
        path: '/approval/detail/:id',//审批详情
        name:'approval/detail',
        component: resolve => require(['views/approval/detail'], resolve)
    },
    {
        path: '/approval/mysubmit',//我发起的
        name:'approval/mysubmit',
        component: resolve => require(['views/approval/mysubmit'], resolve)
    },
    {
        path: '/approval/opinion/:id',//审批意见
        name:'approval/opinion',
        component: resolve => require(['views/approval/opinion'], resolve)
    },
]
