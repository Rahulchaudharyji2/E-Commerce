import axios from "axios";

const BACKEND_URL = 'http://localhost:8080';

const instance = axios.create({
    withCredentials: true
});

export async function registerUser(user) {
    const response = await instance.post(`${BACKEND_URL}/register`, user);
    if (response.status !== 201) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function loginUser(user) {
    const response = await instance.post(`${BACKEND_URL}/login`, user);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function logoutUser() {
    const response = await instance.post(`${BACKEND_URL}/logout`);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function fetchProfile() {
    const response = await instance.get(`${BACKEND_URL}/profile`);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function placeOrder(items) {
    const response = await instance.post(`${BACKEND_URL}/orders`, {items});
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}

export async function addProduct(productData) {
    try {
        const response = await instance.post(`${BACKEND_URL}/products`, productData);
        return response.data; // Assuming your backend returns the newly created product data
    } catch (error) {
        throw new Error('Error adding product'); // Handle specific errors based on your backend response
    }
}

export async function fetchOrders() {
    const response = await instance.get(`${BACKEND_URL}/orders`);
    if (response.status !== 200) {
        throw new Error('cannnot register the user at the moment');
    }
    return response.data;
}