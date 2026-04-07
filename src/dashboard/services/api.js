// services/api.js

export const fetchUsers = async ({ page, limit }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
  );
  return res.json();
};

export const fetchStats = async () => {
  // mock aggregation (real API in prod)
  return {
    revenue: 50000,
    users: 1200,
    orders: 320,
  };
};
