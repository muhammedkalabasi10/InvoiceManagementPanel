import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// export const fetchInvoices =() => API.get('/invoices')
export const fetchInvoice = (id) => API.get(`https://invoice-management-panel.herokuapp.com/invoices/${id}`);
export const addInvoice = (invoice) => API.post("https://invoice-management-panel.herokuapp.com/invoices", invoice);
export const updateInvoice = (id, updatedInvoice) =>
  API.patch(`https://invoice-management-panel.herokuapp.com/invoices/${id}`, updatedInvoice);
export const deleteInvoice = (id) => API.delete(`https://invoice-management-panel.herokuapp.com/invoices/${id}`);
export const fetchInvoicesByUser = (searchQuery) =>
  API.get(`https://invoice-management-panel.herokuapp.com/invoices?searchQuery=${searchQuery.search}`);

export const fetchClient = (id) => API.get(`https://invoice-management-panel.herokuapp.com/clients/${id}`);
export const fetchClients = (page) => API.get(`https://invoice-management-panel.herokuapp.com/clients?page=${page}`);
export const addClient = (client) => API.post("https://invoice-management-panel.herokuapp.com/clients", client);
export const updateClient = (id, updatedClient) =>
  API.patch(`https://invoice-management-panel.herokuapp.com/clients/${id}`, updatedClient);
export const deleteClient = (id) => API.delete(`https://invoice-management-panel.herokuapp.com/clients/${id}`);
export const fetchClientsByUser = (searchQuery) =>
  API.get(`https://invoice-management-panel.herokuapp.com/clients/user?searchQuery=${searchQuery.search}`);

export const fetchProduct = () => API.get(`https://invoice-management-panel.herokuapp.com/products`);
export const fetchProducts = (page) => API.get(`https://invoice-management-panel.herokuapp.com/products?page=${page}`);
export const addProduct = (product) => API.post("https://invoice-management-panel.herokuapp.com/products", product);
export const updateProduct = (id, updatedProduct) =>
  API.patch(`https://invoice-management-panel.herokuapp.com/products/${id}`, updatedProduct);
export const deleteProduct = (id) => API.delete(`https://invoice-management-panel.herokuapp.com/products/${id}`);
export const fetchProductsByUser = (searchQuery) =>
  API.get(`https://invoice-management-panel.herokuapp.com/products/user?searchQuery=${searchQuery.search}`);

export const signIn = (formData) => API.post("https://invoice-management-panel.herokuapp.com/users/signin", formData);
export const signUp = (formData) => API.post("https://invoice-management-panel.herokuapp.com/users/signup", formData);
export const forgot = (formData) => API.post("https://invoice-management-panel.herokuapp.com/users/forgot", formData);
export const reset = (formData) => API.post("https://invoice-management-panel.herokuapp.com/users/reset", formData);

export const fetchProfilesBySearch = (searchQuery) =>
  API.get(
    `https://invoice-management-panel.herokuapp.com/profiles/search?searchQuery=${
      searchQuery.search || searchQuery.year || "none"
    }`
  );
export const fetchProfile = (id) => API.get(`https://invoice-management-panel.herokuapp.com/profiles/${id}`);
export const fetchProfiles = () => API.get("https://invoice-management-panel.herokuapp.com/profiles");
export const fetchProfilesByUser = (searchQuery) =>
  API.get(`https://invoice-management-panel.herokuapp.com/profiles?searchQuery=${searchQuery.search}`);
export const createProfile = (newProfile) => API.post("https://invoice-management-panel.herokuapp.com/profiles", newProfile);
export const updateProfile = (id, updatedProfile) =>
  API.patch(`https://invoice-management-panel.herokuapp.com/profiles/${id}`, updatedProfile);
export const deleteProfile = (id) => API.delete(`https://invoice-management-panel.herokuapp.com/profiles/${id}`);
