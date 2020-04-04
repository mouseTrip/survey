import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/mine',
    component: () => import('@/components/TabbarLayout.vue'),
    children: [
      {
        path: 'mine',
        name: 'mine',
        component: () => import('@/views/About.vue'),
      },
      {
        path: 'more',
        name: 'more',
        component: () => import('@/views/About.vue'),
      },
    ],
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/template',
    name: 'template',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/template_preview',
    name: 'template_preview',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/trashbin',
    name: 'trashbin',
    component: () => import('@/views/About.vue')
  },
  {
    path: '*',
    component: () => import('@/views/About.vue')
  }
]

export default routes
