import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,  
      hidden:true,
      meta:{icon:'',
      
        title:'首页',
        
      }
    },
    // 配置管理
   {
     path:'/manageSystem',
     name:'manageSystem',
     component:()=>import('@/components/layout/index.vue'),
     meta:{
      title:"配置管理",
      icon:'el-icon-setting'
     },
     children:[
       {
         path:'/UserInfoList',
         name:'UserInfoList',
         meta:{
          title:"用户数据",
          icon:''
         },
         component:()=>import('@/views/configManage/UserInfoList.vue')
       },
       {
        path:'/UserInfoDetail',
        name:'UserInfoDetail',
        meta:{
         title:"用户资料",
         icon:''
        },
        component:()=>import('@/views/configManage/UserInfoDetail.vue')
      },{
        path:'/UserInfoPermission',
        name:'UserInfoPermission',
        meta:{
         title:"用户权限",
         icon:''
        },
        component:()=>import('@/views/configManage/UserInfoPermission.vue')
      },
     ]
   },
   // 管理员
   {
     path:'systemAdmin',
     component:()=>import('@/components/layout'),
     meta:{
       icon:'el-icon-user',
       title:'系统管理员'
     },
     children:[
       {
         path:'/AssignPermissions',
         name:'AssignPermissions',
         component:()=>import('@/views/systemAdmin/AssignPermissions.vue'),
         meta:{
           icon:'',
           title:'权限控制'
         },
       },
       {
        path:'/ManageUser',
        name:'ManageUser',
        component:()=>import('@/views/systemAdmin/ManageUser.vue'),
        meta:{
          icon:'',
          title:'用户管理'
        },
      },
     ]
   }
  ]
})
