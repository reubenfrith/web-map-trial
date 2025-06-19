import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material';
import MapView from './components/MapView';
import './App.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box id="app-container">
      <Box id="map-container">
        <MapView />
      </Box>
      <AppBar position="static">
        <Tabs value={tab} onChange={handleChange} aria-label="info tabs">
          <Tab label="Info" />
          <Tab label="About" />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        Sample information about the map.
      </TabPanel>
      <TabPanel value={tab} index={1}>
        This application demonstrates OpenLayers in React 18.
      </TabPanel>
    </Box>
  );
}

export default App;
