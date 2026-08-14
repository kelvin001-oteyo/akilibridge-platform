// src/api/faq.api.js
import apiFetch from "./client";

export const getFaqs = async () => {
  const response = await apiFetch("/faq");
  if (!response.ok) {
    throw new Error("Failed to fetch FAQs");
  }
  return response.json();
};

export const getFaq = async (id) => {
  const response = await apiFetch(`/faq/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch FAQ");
  }
  return response.json();
};

export const createFaq = async (data) => {
  const response = await apiFetch("/faq", {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create FAQ");
  }
  return response.json();
};

export const updateFaq = async (id, data) => {
  const response = await apiFetch(`/faq/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to update FAQ");
  }
  return response.json();
};

export const deleteFaq = async (id) => {
  const response = await apiFetch(`/faq/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete FAQ");
  }
  return response.json();
};