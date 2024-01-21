import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data, isLoading, isError } = useGetGeographyQuery();
  console.log("data", data);
  return <div></div>;
};

export default Geography;
