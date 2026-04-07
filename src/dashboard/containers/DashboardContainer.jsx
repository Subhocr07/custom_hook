import { useInfiniteUsers } from "../hooks/useInfiniteUsers";
import { useStats } from "../hooks/useStats";
import DashboardLayout from "../layouts/DashboardLayout";

export default function DashboardContainer() {
  const { data: stats, isLoading: statsLoading } = useStats();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteUsers();

  // ✅ flatten pages
  const users = data?.pages.flat() || [];

  return (
    <DashboardLayout
      users={users} // ✅ FIXED
      stats={stats}
      loading={isLoading || statsLoading}
      error={isError}
      fetchNextPage={fetchNextPage} // ✅ REQUIRED
      hasNextPage={hasNextPage} // ✅ REQUIRED
      isFetchingNextPage={isFetchingNextPage}
    />
  );
}
