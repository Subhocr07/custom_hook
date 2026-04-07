// DashboardContainer.jsx

import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { useStats } from "../hooks/useStats";
import DashboardLayout from "../layouts/DashboardLayout";

export default function DashboardContainer() {
  const [page, setPage] = useState(1);
  const limit = 5;

  const {
    data: users,
    isLoading: usersLoading,
    isError: usersError,
  } = useUsers({ page, limit });

  const { data: stats, isLoading: statsLoading } = useStats();

  return (
    <DashboardLayout
      users={users}
      stats={stats}
      loading={usersLoading || statsLoading}
      error={usersError}
      page={page}
      setPage={setPage}
    />
  );
}
