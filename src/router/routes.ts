/*
 * @Author: Terry Zhang
 * @Date: 2020-04-05 00:42:34
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-04-25 10:23:04
 * @Description: 路由表配置
 */
import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/mine',
    component: () => import('@/layouts/TabbarLayout.vue'),
    children: [
      {
        path: 'mine',
        name: 'mine',
        component: () => import('@/views/Mine/index.vue'),
      },
      {
        path: 'more',
        name: 'more',
        component: () => import('@/views/More/index.vue'),
      },
    ],
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/edit/:status',
    name: 'edit',
    component: () => import('@/views/Edit/index.vue'),
  },
  {
    path: '/edit-subject/:type',
    name: 'edit-subject',
    component: () => import('@/views/EditSubject/index.vue'),
  },
  {
    path: '/template',
    name: 'template',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/template_preview',
    name: 'template_preview',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/trashbin',
    name: 'trashbin',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '*',
    component: () => import('@/views/About.vue'),
  },
]

export default routes
