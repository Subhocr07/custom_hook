import { useState, useEffect } from "react";
import { dashboardData } from "../data/mockData";

export function useDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //simulate API delay
    setTimeout(() => {
      setData(dashboardData);
    }, []);
  }, []);

  return { data };
}
