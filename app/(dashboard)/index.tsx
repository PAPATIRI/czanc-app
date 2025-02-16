import { Redirect } from "expo-router";

export default function DashboardRoot() {
  return <Redirect href={"/(dashboard)/home"} />;
}
