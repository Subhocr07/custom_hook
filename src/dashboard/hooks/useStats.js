// hooks/useStats.js

import { useQuery } from "@tanstack/react-query";
import { fetchStats } from "../services/api";

export const useStats = () => {
  return useQuery({
    queryKey: ["stats"],
    queryFn: fetchStats,
  });
};
