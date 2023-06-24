import React from 'react';
import { useState } from 'react';
import Topbar from "./global/Topbar";
import Sidebar from './global/Sidebar';
import { ColorModeContext, useMode } from "../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from './dashboard';
import { Routes, Route } from "react-router-dom";

function Dash() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ flex: 1 }}>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Dash;
