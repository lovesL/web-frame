import React from 'react';
import ReactDOM from 'react-dom';
import { extend } from 'umi-request';

/** 异常处理程序 */
const errorHandler = (error) => {
  const { response } = error;
  if (response && response.status) { // 拦截浏览器报的4-5的错误
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    if (status === 404) {
      history.push('/404');
    }
    if (response.status >= 500) {
      notification.error({
        description: `服务器内部错误，请稍后尝试！${ url } ${ status }`,
        message: errorText || '内部错误',
      });
    }
  } else {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};
/** 配置request请求时的默认参数 */
const request = extend({
  errorHandler,
  timeout: 8000,
  credentials: 'include', // 默认请求是否带上cookie
});


export  default request
