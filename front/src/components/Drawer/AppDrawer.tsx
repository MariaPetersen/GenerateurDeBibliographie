import React, { useContext } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/contexts/AuthContext";

function AppDrawer() {
  const drawerWidth = 200;
  const navigate = useNavigate();
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    navigate("/login");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor: "#b1d2bc",
        },
      }}
      open
      anchor="right"
    >
      <Typography variant="h5" align="center" mt={2}>
        Menu
      </Typography>
      {!authenticated ? (
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigate("/login")}>
              Connectez-vous
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => navigate("/signup")}>
              Inscrivez-vous
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigate("/generatepdf")}>
              Ma bibliographie
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleLogout}>Déconnexion</ListItemButton>
          </ListItem>
        </List>
      )}
    </Drawer>
  );
}

export default AppDrawer;
