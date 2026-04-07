// layouts/DashboardLayout.jsx

import StatsCard from "../components/widgets/StatsCard";
import SalesChart from "../components/widgets/SalesChart";
import UserTable from "../components/widgets/UserTable";

// DashboardLayout.jsx

export default function DashboardLayout({
  users,
  stats,
  loading,
  error,
  fetchNextPage,
  hasNextPage,
}) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <StatsCard stats={stats} />

      <UserTable
        users={users}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </>
  );
}
