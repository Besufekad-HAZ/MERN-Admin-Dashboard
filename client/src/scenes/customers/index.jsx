import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { ConstructionOutlined } from "@mui/icons-material";
const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log("data", data);
  return <div>Customers</div>;
};

export default Customers;
