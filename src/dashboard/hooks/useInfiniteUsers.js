// hooks/useInfiniteUsers.js

import { useInfiniteQuery } from "@tanstack/react-query";

const fetchUsers = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${pageParam}&_limit=10`
  );
  return res.json();
};

export const useInfiniteUsers = () => {
  return useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });
};
