import dynamicRoutes from './dynamicRoutes'

export default [
  {
    path: '/user/login',
    component: './login',
    layout: false,
  },
  {
    path: '/',
    component: './Root',
    layout: false,
    routes:[
        ...dynamicRoutes
    ],
  },
  {
    component: './404',
  },
];
