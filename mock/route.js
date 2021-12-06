export default {
  '/api/menus': (req, res) => {
    if(req.query.projectKey === 'eawcs'){
      res.send({
        data: [
          {
            path: '/eawcs/des1',
            name: '环水保菜单1',
          },
          {
            path: '/eawcs/des2',
            name: '环水保菜单2',
          }
        ],
        success: true,
      });
    }else if(req.query.projectKey === 'demolition'){
      res.send({
        data: [
          {
            path: '/demolition/dem1',
            name: '先签后建菜单1',
            exact: true,
          },
          {
            path: '/demolition/dem2',
            name: '先签后建菜单2',
            exact: true,
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
