import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AppDrawer from "../../components/Drawer/AppDrawer";
import { Typography, Box, Stack } from "@mui/material";
import { AuthContext } from "../../utils/contexts/AuthContext";
import { AuthProvider } from "../../utils/contexts/AuthContext";

function Home() {
  const drawerWidth = 200;
  const { authenticated } = useContext(AuthContext);
  return (
    <Stack>
      <AuthProvider>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <AppDrawer />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            className="letter__header"
            mb={5}
          >
            Mettez en forme votre bibliographie
          </Typography>
          <Outlet />

          {authenticated ? (
            <Navigate to="/generatepdf" />
          ) : (
            <Navigate to="/login" />
          )}
        </Box>
      </AuthProvider>
    </Stack>
  );
}

export default Home;
