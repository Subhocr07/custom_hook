// layouts/DashboardLayout.jsx

import StatsCard from "../components/widgets/StatsCard";
import SalesChart from "../components/widgets/SalesChart";
import UserTable from "../components/widgets/UserTable";

export default function DashboardLayout({ data }) {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="stats">
        {data.stats.map((item, i) => (
          <StatsCard key={i} item={item} />
        ))}
      </div>

      <SalesChart data={data.chart} />

      <UserTable users={data.users} />
    </div>
  );
}
