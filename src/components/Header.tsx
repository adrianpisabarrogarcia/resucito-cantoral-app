// src/components/Header.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  Button,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" sx={{ px: 2 }}>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", margin: 1 }}
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            RESUCITÓ
          </Typography>
          <Typography variant="caption" component="div">
            Cantos para las Comunidades Neocatecumenales
          </Typography>
        </Box>
        {/* Buscador */}
        <Box
          sx={{
            position: "relative",
            borderRadius: 1,
            backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
            "&:hover": {
              backgroundColor: (theme) =>
                alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: "100%",
            maxWidth: 400,
            height: "50px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              padding: "18px 18px",
              height: "100%",
              position: "absolute",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Buscar canción…"
            sx={{
              color: "inherit",
              width: "100%",
              paddingLeft: "55px",
            }}
            inputProps={{ "aria-label": "buscar" }}
          />
        </Box>
        {/* <Button color="inherit">Sobre nosotros</Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
