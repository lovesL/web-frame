export default [
  {
    path: '/eawcs',
    layout: true,
    exact: true,
    routes: [
      { path: '/eawcs', redirect: '/eawcs/des1' },
      {
        path: '/eawcs/des1',
        name: '环水保菜单1',
        component:'./eawcs/page1'
      },
      {
        path: '/eawcs/des2',
        name: '环水保菜单2',
        component:'./eawcs/page2'
      },
    ]
  },
  {
    path: '/demolition',
    layout: true,
    exact: true,
    routes: [
      { path: '/demolition', redirect: '/demolition/dem1' },
      {
        path: '/demolition/dem1',
        name: '先签后建菜单1',
        component:'./demolition/page1'
      },
      {
        path: '/demolition/dem2',
        name: '先签后建菜单2',
        exact: true,
        component:'./demolition/page2'
      },
    ]
  },
  {
    component: './404',
  },
];
