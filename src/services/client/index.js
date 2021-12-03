import request from '@/util/request';

export const getClient = params => {
  return request.get(`/api/client`);
};

export const getMenus = params => {
  return request.get(`/api/menus?projectKey=${ params }`);
};
