import { useDashboard } from "../hooks/useDashboard";
import DashboardLayout from "../layouts/DashboardLayout";

export default function DashboardContainer() {
  const { data } = useDashboard();

  if (!data) return <div>Loading...</div>;
  return <DashboardLayout data={data} />;
}
