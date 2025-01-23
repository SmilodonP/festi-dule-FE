const BASE_URL = 'http://localhost:3000/api/v1'

export const adminGetUsers = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/admin/users${query ? `?${query}` : ''}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }

  return response.json();
};


export const adminGetUserDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/admin/users/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user's schedule");
  }

  return response.json();
};

export const adminDeleteShow = async (userId, showId) => {
  const response = await fetch(`${BASE_URL}/admin/users/${userId}/shows/${showId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Failed to remove concert from schedule. Please try again later");
  }

  const data = await response.json();
  return data;
};