import api from "../lib/axios";



export const fetchProducts = async ({ pageParam = 1 }) => {
  const response = await api.get(
    `/product/all-products?page=${pageParam}`
  );

  return response.data;
};

// Fetch single product
export const fetchProductById = async (id) => {
  const response = await api.get(`/product/${id}`);
  return response.data.data;
};
