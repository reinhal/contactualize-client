/**
 * Stop trying to make `fetch` happen, W3C; it's not going to happen.
 * @param {String} path
 * @param {Object} [fetchOpts={ method: 'get' }]
 * @param {Object} [params=null]
 */
export function soFetch(path, fetchOpts = { method: 'get' }, params = null) {
  // if the user does not supply fetchOpts...
  // if (fetchOpts === undefined) fetchOpts = { method: 'get' };

  // if the user does not supply params...
  // if (params === undefined) params = null;

  let url = new URL(path);
  if (params !== null)
    Object.values(params).forEach(([k, v]) => url.searchParams.append(k, v));
  return fetch(url, fetchOpts)
    .then(res => res.json())
    .catch(ex => console.error(ex));
}

export function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}