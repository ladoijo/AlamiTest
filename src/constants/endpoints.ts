export type Endpoint = ['get' | 'post' | 'put' | 'patch' | 'delete', string]

export const ADD_SELLER_POST: Endpoint = ['post', 'addSeller']
export const ADD_PRODUCT_POST: Endpoint = ['post', 'addProduct']
export const LIST_PRODUCT_GET: Endpoint = ['get', 'listProductBySellerId']
export const SEARCH_PRODUCT_GET: Endpoint = ['get', 'searchProductByKeyword']
