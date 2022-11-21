import React, { useEffect } from "react";
import { Container, Wrapper } from "./styled";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useLocation, useNavigate } from "react-router-dom";
import Standings from "../standings";
import Matches from "../matches";

export default function Main() {
  const [value, setValue] = React.useState("standings");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/?tap=${newValue}`);
  };

  useEffect(() => {
    const tap = new URLSearchParams(location.search).get("tap");
    if (tap) {
      setValue(tap);
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Standings" value="standings" />
              <Tab label="Matches" value="matches" />
            </TabList>
          </Box>
          <TabPanel value="standings">
            <Standings />
          </TabPanel>
          <TabPanel value="matches">
            <Matches />
          </TabPanel>
        </TabContext>
      </Wrapper>
    </Container>
  );
}
