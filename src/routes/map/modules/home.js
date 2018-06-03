/**
 * Created by Administrator on 2017/1/20.
 */

export default [
    {
        path: '/home',//首页
        name:'home',
        component: resolve => require(['views/home'], resolve)//用这种方法引用组件可实现懒加载
        /*children: [
            {
                // 当 /home/detail 匹配成功，
                // detail 会被渲染在 User 的 <router-view> 中
                path: 'detail',
                component: resolve => require(['views/home/detail'], resolve)
            }
        ]*/
    },
]
