export const HOST = import.meta.env.VITE_API_URL;

// Authentication Routes
export const SIGNUP_ROUTE = `/api/v1/auth/sign-up`;
export const LOGIN_ROUTE = `/api/v1/auth/sign-in`;

// User Routes
export const USERS_ROUTE = `/api/v1/users`;
export const USER_BY_ID_ROUTE = (id) => `/api/v1/users/${id}`;

// Product Routes
export const PRODUCTS_ROUTE = `/api/v1/products`;
export const PRODUCT_BY_ID_ROUTE = (id) => `/api/v1/products/${id}`;

// Category Routes
export const CATEGORIES_ROUTE = `/api/v1/categories`;
export const CATEGORY_BY_ID_ROUTE = (id) => `/api/v1/categories/${id}`;

// Sub-Category Routes
export const SUBCATEGORIES_ROUTE = `/api/v1/sub-categories`;
export const SUBCATEGORY_BY_ID_ROUTE = (id) => `/api/v1/sub-categories/${id}`;

// Wishlist Routes
export const WISHLIST_ROUTE = `/api/v1/wishlist`;
export const ADD_PRODUCT_TO_WISHLIST_ROUTE = (id) =>
  `/api/v1/wishlist/product/${id}`;
export const REMOVE_PRODUCT_FROM_WISHLIST_ROUTE = (id) =>
  `/api/v1/wishlist/product/${id}`;
