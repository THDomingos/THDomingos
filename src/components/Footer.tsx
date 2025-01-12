import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Função para mostrar a seta quando o usuário desce na página
  const handleScroll = () => {
    setShowScroll(window.scrollY > 200);
  };

  // Função para voltar ao topo da página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "secondary.main",
        color: "text.primary",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <Typography variant="body2">
        © 2024 | <a href="https://www.thiagohdomingos.com" style={{ color: "inherit", textDecoration: "none" }}>thiagohdomingos.com</a>
      </Typography>

      {showScroll && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            backgroundColor: "primary.main",
            color: "#fff",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            boxShadow: 3,
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      )}
    </Box>
  );
};

export default Footer;
