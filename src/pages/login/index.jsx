import React from 'react'
import { Button  } from 'antd';
import { history } from  'umi'

const Login = () => {
  return (
    <div>
      <Button onClick={ ()=> history.replace('/') }>登录</Button>Button
    </div>
  )
}

export default Login
