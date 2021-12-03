export default {
  '/api/menus': (req, res) => {
    if(req.query.projectKey === 'eawcs'){
      res.send({
        data: [
          {
            path: '/des1',
            name: '菜单1',
            component:'@/eawcs/page1'
          },
          {
            path: '/des2',
            name: '菜单2',
            component:'@/eawcs/page2'
          }
        ],
        success: true,
      });
    }else if(req.query.projectKey === 'demolition'){
      res.send({
        data: [
          {
            path: '/dem1',
            name: '菜单1',
            component:'@/demolition/page1'
          },
          {
            path: '/dem2',
            name: '菜单2',
            component:'@/demolition/page2'
          }
        ],
        success: true,
      });
    }
    },
  '/api/client':[
    {
      projectName:'环水保',
      projectKey:'eawcs',
      src:'',
      des:''
    },
    {
      projectName:'先签后建',
      projectKey:'demolition',
      src:'',
      des:''
    }
  ]
};
