/*
 * @Author: Terry Zhang
 * @Date: 2020-04-05 00:42:34
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-04-29 22:18:35
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
    path: '/edit',
    name: 'edit',
    component: () => import('@/views/Edit/index.vue'),
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
