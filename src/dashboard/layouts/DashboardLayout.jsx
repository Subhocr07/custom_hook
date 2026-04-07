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
  page,
  setPage,
}) {
  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      <StatsCard stats={stats} />
      <SalesChart />
      <UserTable users={users} page={page} setPage={setPage} />
    </>
  );
}
