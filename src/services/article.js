import request from 'utils/request';
import { API_ROOT } from 'src/config';
import { withParams } from 'utils/qs';

export function fetchArticles(page, per, params = {}) {
  const query = { page, per, ...params };
  return request(withParams(`${API_ROOT}/articles`, query));
}

export function fetchArticle(id) {
  return request(`${API_ROOT}/articles/${id}`);
}
