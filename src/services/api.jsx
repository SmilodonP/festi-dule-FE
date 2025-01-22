const BASE_URL = 'http://localhost:3000/api/v1'

export const adminGetUsers = async () => {
  const response = await fetch(`${BASE_URL}/admin/users`);
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
    throw new Error("Failed to remove concert from schedule. Please try again later");
  }
};