import api from "./api";

export async function getProducts() {
  const response = await api.get("products");
  return response.data;
}

export async function getProductsBestSelling() {
  const response = await api.get("products/bestSelling");
  return response.data;
}
export async function getProduct(id) {
  const response = await api.get(`products/${id}`);
  if (response.data === "") {
    return alert("Produto não encontrado");
  }
  return response.data;
}

export async function getCategories() {
  const response = await api.get("/products/categories");
  return response.data;
}
