import api from "./api";

export async function getProducts() {
  const response = await api.get("products");
  return response.data;
}

export async function getProduct(id) {
  const response = await api.get(`products/${id}`);
  return response.data;
}
