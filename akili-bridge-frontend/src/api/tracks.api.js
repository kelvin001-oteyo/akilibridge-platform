// src/api/tracks.api.js
import apiFetch from "./client";

export const getTracks = async () => {
  const response = await apiFetch("/tracks");
  if (!response.ok) {
    throw new Error("Failed to fetch tracks");
  }
  return response.json();
};

export const getTrack = async (id) => {
  const response = await apiFetch(`/tracks/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch track");
  }
  return response.json();
};

export const createTrack = async (data) => {
  const response = await apiFetch("/tracks", {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to create track");
  }
  return response.json();
};

export const updateTrack = async (id, data) => {
  const response = await apiFetch(`/tracks/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to update track");
  }
  return response.json();
};

export const deleteTrack = async (id) => {
  const response = await apiFetch(`/tracks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete track");
  }
  return response.json();
};