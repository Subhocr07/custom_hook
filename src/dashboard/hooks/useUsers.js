import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/api";

export const useUsers = ({ page, limit }) => {
  return useQuery({
    queryKey: ["users", page, limit],
    queryFn: () => fetchUsers({ page, limit }),
    keepPreviousData: true,
  });
};
