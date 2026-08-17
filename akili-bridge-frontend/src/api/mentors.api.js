import apiFetch from "./client";

export const getMentors = async () => {
  const response = await apiFetch("/mentors");

  if (!response.ok) {
    throw new Error("Failed to fetch mentors");
  }

  return response.json();
};

export const getMentor = async (id) => {
  const response = await apiFetch(`/mentors/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch mentor");
  }

  return response.json();
};

export const createMentor = async (data) => {
  const response = await apiFetch("/mentors", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create mentor");
  }

  return response.json();
};

export const updateMentor = async (id, data) => {
  const response = await apiFetch(`/mentors/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update mentor");
  }

  return response.json();
};

export const deleteMentor = async (id) => {
  const response = await apiFetch(`/mentors/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete mentor");
  }

  return response.json();
};
