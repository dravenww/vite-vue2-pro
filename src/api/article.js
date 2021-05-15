import request from 'src/utils/request'

const prefix = 'vue-element-admin'

export function fetchList(query) {
  return request({
    url: prefix + '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: prefix + '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: prefix + '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: prefix + '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: prefix + '/article/update',
    method: 'post',
    data
  })
}
